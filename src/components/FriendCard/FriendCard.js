import React, { Component } from 'react';
import axios from 'axios';

import * as classes from './FriendCard.module.css';


class FriendCard extends Component {
    state = {
        loaded: false,
        error: null,
        expanded: false,
        character: null
    };

    // Type is avatar, main, inset
    // http://render-{region}.worldofwarcraft.com/character/{character.thumbnail}
    thumbnailUrl = (region, thumbnailUrl, type) => {
        const prefix = 'http://render-';
        const body = '.worldofwarcraft.com/character/';
        const thumbnailKey = thumbnailUrl.replace('avatar.jpg', `${type}.jpg`)
        return `${prefix}${region}${body}${thumbnailKey}?alt=/wow/static/images/2d/avatar/1-0.jpg`
    };

    characterDataUrl = (apiKey, region, realm, character, fields = []) => {
        const fieldString = `${fields.length > 0 ? `&fields=${fields.join(',')}` : ''}`;
        
        const url = `https://${region}.api.battle.net/wow/character/${realm}/${character}`;
        const params = `?locale=en_US&apikey=${apiKey}${fieldString}`;
        return `${url}${params}`
    };

    queryCharacterData = () => {
        const fields = ['items', 'titles', 'progression'];
        axios.get(this.characterDataUrl(
            this.props.apikey,
            this.props.region,
            this.props.realm,
            this.props.character, 
            fields
        )).then(resp => {
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

    componentDidUpdate() {
        if (!this.state.loaded && !this.state.error)
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
        return this.thumbnailUrl(settings.region, settings.thumbnailUrl, settings.type)
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