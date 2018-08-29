import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SettingsMenu extends Component {
  state = {
    withApiExport: false
  };

  exportString = () => {
    const { settings, characters } = this.props;
    const { withApiExport } = this.state;
    const output = {
      settings: { ...settings },
      characters
    };
    if (!withApiExport) {
      delete output.settings;
    }
    return JSON.stringify(output);
  };

  settingsSaveSubmit = event => {
    const { settings, onSaveSettings } = this.props;
    event.preventDefault();
    const formData = new FormData(event.target);
    const apiKey = formData.get('apiKey');
    const newSettings = {
      ...settings,
      apiKey
    };
    onSaveSettings(newSettings);
  };

  importSettingsSubmit = event => {
    const {
      settings,
      characters,
      onSaveSettings,
      onSaveCharacters
    } = this.props;
    event.preventDefault();
    const formData = new FormData(event.target);
    const parsedImport = JSON.parse(formData.get('importData'));
    if (parsedImport.settings) {
      const newSettings = {
        ...settings,
        ...parsedImport.settings
      };
      onSaveSettings(newSettings);
    }

    if (parsedImport.characters) {
      const newCharacters = [...characters, ...parsedImport.characters];
      onSaveCharacters(newCharacters);
    }
  };

  render() {
    const exportString = this.exportString();
    return (
      <React.Fragment>
        <form onSubmit={this.settingsSaveSubmit}>
          <h4>Settings</h4>
          <label htmlFor="apikey">
            Api Key:
            <input id="apiKey" type="text" name="apiKey" />
          </label>

          <button type="submit">Save</button>
        </form>
        <form>
          <h4>Export Configuration</h4>
          <input
            type="checkbox"
            onChange={e => this.setState({ withApiExport: e.target.checked })}
          />
          <span>Include API Key</span>
          <br />
          {exportString ? <textarea readOnly value={exportString} /> : null}
        </form>
        <form onSubmit={this.importSettingsSubmit}>
          <h4>Import Configuration</h4>
          <textarea id="importData" name="importData" />
          <button type="submit">Import</button>
        </form>
      </React.Fragment>
    );
  }
}

SettingsMenu.propTypes = {
  settings: PropTypes.shape({ apiKey: PropTypes.string }).isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSaveSettings: PropTypes.func.isRequired,
  onSaveCharacters: PropTypes.func.isRequired
};

export default SettingsMenu;
