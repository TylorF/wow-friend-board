import React, { Component } from 'react';
import './App.css';
import Battlenet from './lib/Battlenet';

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
      settings,
      characters,
      battlenet: new Battlenet(settings.apiKey)
    };
  }

  onSaveSettings = settings => {
    localStorage.setItem('settings', JSON.stringify(settings));
    this.setState({
      settings: { ...settings },
      battlenet: new Battlenet(settings.apiKey)
    });
  };

  onSaveCharacters = characters => {
    localStorage.setItem('characters', JSON.stringify(characters));
    this.setState({
      characters: [...characters]
    });
  };

  render() {
    const { settings, characters, battlenet } = this.state;
    return (
      <div className="App">
        <AppBar>
          <BarTab title="Settings">
            <SettingsMenu
              settings={settings}
              characters={characters}
              onSaveSettings={this.onSaveSettings}
              onSaveCharacters={this.onSaveCharacters}
            />
          </BarTab>
          <BarTab title="Characters">
            <CharactersMenu
              characters={characters}
              onSaveCharacters={this.onSaveCharacters}
            />
          </BarTab>
        </AppBar>
        <FriendList battlenet={battlenet} characters={characters} />
      </div>
    );
  }
}

export default App;
