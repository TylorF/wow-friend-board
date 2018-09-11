import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharactersMenu extends Component {
  static propTypes = {
    characters: PropTypes.arrayOf(
      PropTypes.shape({
        region: PropTypes.string.isRequired,
        realm: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    onSaveCharacters: PropTypes.func.isRequired
  };

  existingCharacterList = () => {
    const { characters } = this.props;
    return characters.map(character => (
      <div key={this.characterString(character)}>
        <span
          role="button"
          tabIndex="0"
          onClick={() => this.deleteCharacter(character)}
          onKeyPress={e => {
            if (e.key === 'Enter') this.deleteCharacter(character);
          }}
        >
          {`${this.characterString(character)} -- Delete`}
        </span>
        <br />
      </div>
    ));
  };

  charactersAddSubmit = event => {
    event.preventDefault();
    const { characters, onSaveCharacters } = this.props;
    const formData = new FormData(event.target);
    const newChar = {
      region: formData.get('region'),
      realm: formData.get('realm'),
      name: formData.get('name')
    };
    const newCharString = this.characterString(newChar);
    const existing = characters.find(
      char => this.characterString(char) === newCharString
    );
    if (existing) {
      return; // TODO: add messaging
    }
    onSaveCharacters([...characters, newChar]);
  };

  characterString = character =>
    `${character.region}/${character.realm}/${character.name}`;

  deleteCharacter = character => {
    const { characters, onSaveCharacters } = this.props;
    onSaveCharacters(characters.filter(char => char !== character));
  };

  render() {
    return (
      <React.Fragment>
        {this.existingCharacterList()}
        <form onSubmit={this.charactersAddSubmit}>
          <label htmlFor="region">
            Region:
            <input id="region" type="text" name="region" />
          </label>

          <br />
          <label htmlFor="realm">
            Realm:
            <input id="realm" type="text" name="realm" />
          </label>

          <br />
          <label htmlFor="name">
            Character Name:
            <input id="name" type="text" name="name" />
          </label>

          <button type="submit">Add</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CharactersMenu;
