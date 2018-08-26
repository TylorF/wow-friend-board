import React, { Component } from 'react';

class SettingsMenu extends Component {

    state = {
        withApiExport: false
    }

    exportString = () => {
        const output = {
            settings: {...this.props.settings},
            characters: this.props.characters
        };
        if (!this.state.withApiExport){
            delete output.settings;
        }
        return JSON.stringify(output);
    };

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

    importSettingsSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const parsedImport = JSON.parse(formData.get('importData'));
        if (parsedImport.settings) {
            const settings = {
                ...this.props.settings,
                ...parsedImport.settings
            };
            this.props.onSaveSettings(settings);
        }

        if (parsedImport.characters) {
            const characters = [
                ...this.props.characters,
                ...parsedImport.characters
            ];
            this.props.onSaveCharacters(characters);
        }
    };

    render() {
        const exportString = this.exportString();
        return (
            <React.Fragment>
                <form onSubmit={this.settingsSaveSubmit}>
                    <h4>Settings</h4>
                    <label>Api Key:</label> 
                    <input id="apiKey" type="text" name="apiKey" />
                    <button>Save</button>
                </form>
                <form>
                    <h4>Export Configuration</h4>
                    <input 
                        type="checkbox" 
                        onChange={(e) => this.setState({withApiExport: e.target.checked})}
                    />
                    <label>Include API Key</label>
                    <br />
                    {exportString ? <textarea readOnly={true} defaultValue={exportString} /> : null}
                </form>
                <form onSubmit={this.importSettingsSubmit}>
                    <h4>Import Configuration</h4>
                    <textarea id="importData" name="importData" />
                    <button>Import</button>
                </form>
            </React.Fragment>
        );
    }
}

export default SettingsMenu;