import React, { Component } from 'react';

import * as classes from './FriendCard.module.css';


class FriendCard extends Component {
    state = {
        loaded: false,
        error: null,
        expanded: false,
        character: null
    };

    queryCharacterData = () => {
        const fields = ['items', 'titles', 'progression', 'guild'];
        this.props.battlenet.characterData(
            this.props.region,
            this.props.realm,
            this.props.character, 
            fields
        ).then(resp => {
            console.log(resp.data);
            this.setState({
                character: resp.data,
                loaded: true,
                error: null
            });
        }).catch(e => {
            console.log(e);
            window.error = e;
            this.setState({loaded: false, error: e});
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.battlenet !== prevProps.battlenet)
            this.queryCharacterData();
        else if (!this.state.loaded && !this.state.error)
            this.queryCharacterData();
    }

    componentDidMount() {
        this.queryCharacterData();
    }

    emptyCharacter = () => {
        return { 
            name: this.props.character, 
            items: {averageItemLevel: '...'}, 
            titles: [] 
        };
    }

    expandable = (classString) => {
        if (this.state.expanded)
            return `${classString} ${classes.open}`;
        else
            return classString;
    }

    toggleExpand = () => this.setState({expanded: !this.state.expanded});

    // Title format is "title %s" so blank is actually "%s"
    enabledTitleStringOrBlank = (titles) => (titles.find((t) => t.selected) || {name: "%s"}).name;
    formatNameWithTitle = (title, name) => title.replace('%s', name);
    charImageUrlForState = () => {
        const character = this.state.character || {};
        let settings = {
            region: character.region || 'us',
            thumbnailUrl: character.thumbnail || 'fallback',
            type: this.state.expanded ? 'main' : 'inset'
        }
        return this.props.battlenet.characterImageUrl(settings.region, settings.thumbnailUrl, settings.type)
    }

    errorMessage(error) {
        const status = error.response.status;
        let message;
        if (status === 404) {
            const charString = `${this.props.region}/${this.props.realm}/${this.props.character}`;
            message = <span>Character {charString} does not exist :(</span>;
        } else {
            message = <span>An error has occurred...</span>;
        }
        return <div className={classes.ErrorMessage}>{message}</div>;
    }

    guildField(name) {
        return (
            <div className={classes.GuildField}>
                <span>{`<${name}>`}</span>
            </div>
        );
    }

    cardDetails() {
        const character = this.state.character || this.emptyCharacter();
        const titleName = this.formatNameWithTitle(
            this.enabledTitleStringOrBlank(character.titles), 
            character.name
        );

        return (
            <React.Fragment>
                <div className={classes.NameField}>
                    <span>{titleName}</span>
                </div>
                {character.guild ? (
                    <div className={classes.GuildField}>
                        <span>{`<${character.guild.name}>`}</span>
                    </div> 
                ): null}
                <br />
                <div className={classes.DetailField}>
                    <span>LV: {character.level}</span>
                </div>
        
                <div className={classes.DetailField}>
                    <span>iLevel: {character.items.averageItemLevel}</span>
                </div>
                
                <div className={classes.DetailField}>
                    <span>HKs: {character.totalHonorableKills}</span>
                </div>

                <div className={classes.DetailField}>
                    <span>Achievement Points: {character.achievementPoints}</span>
                </div>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div className={this.expandable(classes.FriendCard)} >
                <div className={this.expandable(classes.MediumCardImage)}
                    style={{backgroundImage: `url('${this.charImageUrlForState()}')`}}
                    onClick={this.toggleExpand}>
                </div>
                <div className={classes.InfoHolder}>
                    {this.state.error ? this.errorMessage(this.state.error) : this.cardDetails()}
                </div>
            </div>
        );
    }
}

export default FriendCard;