import React, { Component } from 'react';
import './App.css';
import battlenet from './lib/battlenet';

import FriendList from './components/FriendList/FriendList';
import AppBar, { BarTab } from './components/AppBar/AppBar';
import SettingsMenu from './components/AppBar/SettingsMenu/SettingsMenu';
import CharactersMenu from './components/AppBar/CharactersMenu/CharactersMenu';


class App extends Component {
  constructor() {
    super();
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    const characters = JSON.parse(localStorage.getItem('characters') || '[]');

    this.state = {
      settings: settings,
      characters: characters,
      battlenet: new battlenet(settings.apiKey)
    }
  }


  onSaveSettings = (settings) => {
    localStorage.setItem('settings', JSON.stringify(settings));
    this.setState({
      settings: {...settings},
      battlenet: new battlenet(settings.apiKey)
    })
  };

  onSaveCharacters = (characters) => {
    localStorage.setItem('characters', JSON.stringify(characters));
    this.setState({
      characters: [...characters]
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar >
          <BarTab title='Settings'>
            <SettingsMenu 
              settings={this.state.settings}
              characters={this.state.characters}
              onSaveSettings={this.onSaveSettings}
              onSaveCharacters={this.onSaveCharacters}
            />
          </BarTab>
          <BarTab title='Characters'>
            <CharactersMenu
              characters={this.state.characters}
              onSaveCharacters={this.onSaveCharacters}
            />
          </BarTab>
        </AppBar>
        <FriendList 
          battlenet={this.state.battlenet}
          characters={this.state.characters}
        />
      </div>
    );
  }
}

export default App;
