import React from 'react';
import List from './components/List';
import axios from 'axios';

import './App.css';

const SWAPI = 'https://swapi.co/api/people/';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      current: 0
    };

    this._nextPage = this._nextPage.bind(this);
    this._previousPage = this._previousPage.bind(this);
    this._setFav = this._setFav.bind(this);
    this._remCharacter = this._remCharacter.bind(this);
    this._saveChanges = this._saveChanges.bind(this);
  }

  componentWillMount() {
    axios.get(SWAPI)
      .then(result => {
        const data = result.data;
        
        this.setState({
          count: data.count,
          next: data.next,
          previous: data.previous,
          characters: data.results
        });
      })
      .catch();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>Star wars characters</h1>
            <hr/>
          </div>
        </div>
        {this.state.modal &&
          <div className="modalBg">
            <div className="Modal">
              <h2>Tas seguro?</h2>
              <div className="botones">
                <div 
                  className="Button dark"
                  onClick={() => {this.setState({modal: false})}}
                >Cancelar
                </div>
                <div 
                  className="Button"
                  style={ {borderColor: '#1b1b1b'}}
                  onClick={() => this._remCharacter(this.state.current)}
                >Aceptar</div>
              </div>
            </div>
          </div>
        }
        <div className="content">
          <List 
            characters={this.state.characters}
            next={this.state.next}
            previous={this.state.previous}
            _nextPage={this._nextPage}
            _previousPage={this._previousPage}
            _setFav={this._setFav}
            _remCharacter={this._remCharacter}
            _saveChanges={this._saveChanges}
          />
        </div>
      </div>
    );
  }

  _saveChanges(character) {
    const { id } = character;

    let update = this.state.characters;

    update[id].name = character.name;
    update[id].height = character.height;
    update[id].films = character.films;
    update[id].mass = character.mass;

    this.setState({ characters: update });
  }

  _setFav(id) {
    let aux = this.state.characters;

    aux[id].fav = !aux[id].fav;

    this.setState({
      characters: aux
    });
  }
  

  _remCharacter(id) {
    if (this.state.modal) {
      let aux = this.state.characters;
  
      aux.splice(id, 1);
  
      this.setState({
        characters: aux,
        modal: false,
        current: 0
      });
    } else 
      this.setState({modal: true, current: id});
  }

  _nextPage() {
    axios.get(this.state.next)
      .then(result => {
        const data = result.data;
        
        this.setState({
          count: data.count,
          next: data.next,
          previous: data.previous,
          characters: data.results
        });
      })
      .catch();
  }

  _previousPage(){
    axios.get(this.state.previous)
      .then(result => {
        const data = result.data;
        
        this.setState({
          count: data.count,
          next: data.next,
          previous: data.previous,
          characters: data.results
        });
      })
      .catch();
  }
}

export default App;
