import React, { Component } from 'react';

class CharactersMenu extends Component {
    existingCharacterList = () => {
        return this.props.characters.map((character) => {
            return(
                <div key={this.characterString(character)}>
                    <label onClick={() => this.deleteCharacter(character)}>
                        {this.characterString(character)} -- Delete
                    </label>
                    <br/>
                </div>
            );
        });
    }
    
    charactersAddSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newChar = {
            region:  formData.get('region'),
            realm:  formData.get('realm'),
            name:  formData.get('name'),
        }
        const newCharString = this.characterString(newChar);
        const existing = this.props.characters.find(char => {
            return this.characterString(char) === newCharString
        });
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
    render() {
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
}

export default CharactersMenu;