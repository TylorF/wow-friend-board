import React, { Component } from 'react';
import './App.css';

import FriendList from './components/FriendList/FriendList';
import AppBar from './components/AppBar/AppBar';

class App extends Component {
  state = {
    settings: JSON.parse(localStorage.getItem('settings') || '{}'),
    characters: JSON.parse(localStorage.getItem('characters') || '[]')
  }


  onSaveSettings = (settings) => {
    localStorage.setItem('settings', JSON.stringify(settings));
    this.setState({
      settings: settings
    })
  };

  onSaveCharacters = (characters) => {
    localStorage.setItem('characters', JSON.stringify(characters));
    this.setState({
      characters: characters
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar 
          characters={this.state.characters}
          onSaveSettings={this.onSaveSettings}
          onSaveCharacters={this.onSaveCharacters}
        />
        <FriendList 
          apiKey={this.state.settings.apiKey}
          characters={this.state.characters}
        />
      </div>
    );
  }
}

export default App;
