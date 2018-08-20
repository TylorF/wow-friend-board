import React, { Component } from 'react';

import * as classes from './AppBar.module.css';

class AppBar extends Component {
    state = {
        expanded: false,
        selection: null
    }

    settingsContent () {
        return (
            <form onSubmit={this.settingsSaveSubmit}>
                <label>Api Key:</label> 
                <input id="apiKey" type="text" name="apiKey" />
                <button>Save</button>
            </form>
        );
    };

    existingCharacterList () {
        return this.props.characters.map((character) => {
            return(
                <div>
                    <label onClick={() => this.deleteCharacter(character)} key={this.characterString(character)}>{this.characterString(character)} -- Delete</label>
                    <br/>
                </div>
            );
        });
    }
    charactersContent () {
        return (
            <React.Fragment>
                {this.existingCharacterList()}
                <form onSubmit={this.charactersAddSubmit}>
                    <label>Region:</label> 
                    <input id="region" type="text" name="region" />
                    <br />
                    <label>Realm:</label> 
                    <input id="realm" type="text" name="realm" />
                    <br />
                    <label>Character Name:</label> 
                    <input id="name" type="text" name="name" />
                    <button>Add</button>
                </form>
            </React.Fragment>
        );
    }

    settingsSaveSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const apiKey = formData.get('apiKey');
        const settings = {
          ...this.props.settings,
          apiKey: apiKey
        };
        this.props.onSaveSettings(settings);
      };
    
      charactersAddSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newChar = {
          region:  formData.get('region'),
          realm:  formData.get('realm'),
          name:  formData.get('name'),
        }
        const newCharString = this.characterString(newChar);
        const existing = this.props.characters.find(char => this.characterString(char) === newCharString)
        if (existing) {
          return false;
        }
        const characters = [
          ...this.props.characters,
          newChar
        ];
        this.props.onSaveCharacters(characters);
      }
    

    characterString = (character) => {
        return `${character.region}/${character.realm}/${character.name}`
    }
    
    deleteCharacter = (character) => {
        this.props.onSaveCharacters(this.props.characters.filter((char) => char !== character))
    }
    

    getContent(selection) {
        switch(selection) {
            case 'settings':
                return this.settingsContent();
            case 'characters':
                return this.charactersContent();
            default:
                return null;
        }
    }

    getDropDownTabClass(tab) {
        const tabClasses = [classes.DropDownTab];
        if(this.state.expanded && this.state.selection === tab) {
            tabClasses.push(classes.Active); 
        }
        return tabClasses.join(' ');
    }

    onTabClick (tab){
        if(tab === this.state.selection){
            this.setState({selection: null, expanded: false});
        } else {
            this.setState({selection: tab, expanded: true});
        }
    }

    render () {
        return(
            <React.Fragment>
                <header className={classes.AppBar}>
                    <div className={classes.Logo}>WoW Friend Board</div>
                    <div className={classes.DropDownTabHolder}>
                        <div 
                            className={this.getDropDownTabClass('settings')} 
                            onClick={() => this.onTabClick('settings')}
                        >Settings</div>
                        <div 
                            className={this.getDropDownTabClass('characters')} 
                            onClick={() => this.onTabClick('characters')}
                        >Friend List</div>
                    </div>
                </header>
                <div className={this.state.expanded ? [classes.DropDown, classes.open].join(' ') : classes.DropDown}>
                    {this.getContent(this.state.selection)}
                </div>
            </React.Fragment>
        );
    }
}

export default AppBar;