import React from 'react';
import List from './components/List';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const lists = [
      {
        name: 'Luke Skywalker',
        gender: 'Male',
        date: '4634',
        fav: false
      },
      {
        name: 'Luke1',
        gender: 'Male',
        date: '4634',
        fav: false
      },
      {
        name: 'Luke2',
        gender: 'Female',
        date: '1234',
        fav: true
      },
      {
        name: 'Luke3',
        gender: 'Male',
        date: '6542',
        fav: false
      },
      {
        name: 'Luke2',
        gender: 'Female',
        date: '1234',
        fav: true
      },
      {
        name: 'Luke3',
        gender: 'Male',
        date: '6542',
        fav: false
      },
      {
        name: 'Luke2',
        gender: 'Female',
        date: '1234',
        fav: true
      },
      {
        name: 'Luke3',
        gender: 'Male',
        date: '6542',
        fav: false
      }
    ];
    this.state = {
      lists: lists
    };
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
          <List characters = {this.state.lists}/>
        </div>
      </div>
    );
  }
}

export default App;
