import React from 'react';
import List from './components/List';
import axios from 'axios';

import './App.css';

const SWAPI = 'https://swapi.co/api/people/';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this._nextPage = this._nextPage.bind(this);
    this._previousPage = this._previousPage.bind(this);
    this._setFav = this._setFav.bind(this);
    this._remCharacter = this._remCharacter.bind(this);
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
        <div className="content">
          <List 
            characters={this.state.characters}
            next={this.state.next}
            previous={this.state.previous}
            _nextPage={this._nextPage}
            _previousPage={this._previousPage}
            _setFav={this._setFav}
            _remCharacter={this._remCharacter}
          />
        </div>
      </div>
    );
  }

  _setFav(id) {
    let aux = this.state.characters;

    aux[id].fav = !aux[id].fav;

    this.setState({
      characters: aux
    });
  }

  _remCharacter(id) {
    let aux = this.state.characters;

    aux.splice(id, 1);

    this.setState({
      characters: aux
    })
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
