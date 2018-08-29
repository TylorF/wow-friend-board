import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as classes from './FriendCard.module.css';
import Battlenet from '../../lib/Battlenet';

class FriendCard extends Component {
  state = {
    loaded: false,
    error: null,
    expanded: false,
    character: undefined
  };

  componentDidMount() {
    this.queryCharacterData();
  }

  componentDidUpdate(prevProps) {
    const { battlenet } = this.props;
    const { loaded, error } = this.state;
    if (battlenet !== prevProps.battlenet) this.queryCharacterData();
    else if (!loaded && !error) this.queryCharacterData();
  }

  queryCharacterData = () => {
    const { battlenet, region, realm, character } = this.props;
    const fields = ['items', 'titles', 'progression', 'guild'];
    battlenet
      .characterData(region, realm, character, fields)
      .then(resp => {
        // I like the character data being available for dev
        // eslint-disable-next-line no-console
        console.log(resp.data);
        this.setState({
          character: resp.data,
          loaded: true,
          error: null
        });
      })
      .catch(e => {
        this.setState({ loaded: false, error: e });
      });
  };

  emptyCharacter = () => {
    const { character } = this.props;
    return {
      name: `Loading ${character}...`,
      items: { averageItemLevel: '...' },
      titles: []
    };
  };

  expandable = classString => {
    const { expanded } = this.state;
    if (expanded) return `${classString} ${classes.open}`;
    return classString;
  };

  toggleExpand = () => {
    this.setState(prev => ({ expanded: !prev.expanded }));
  };

  // Title format is "title %s" so blank is actually "%s"
  enabledTitleStringOrBlank = titles =>
    (titles.find(t => t.selected) || { name: '%s' }).name;

  formatNameWithTitle = (title, name) => title.replace('%s', name);

  charImageUrlForState = () => {
    const { character = {}, expanded } = this.state;
    const { battlenet } = this.props;
    return battlenet.characterImageUrl(
      character.region || 'us',
      character.thumbnail || 'fallback',
      expanded ? 'main' : 'inset'
    );
  };

  errorMessage = error => {
    const { response: status } = error;
    const { region, realm, character } = this.props;
    let message;
    if (status === 404) {
      const charString = `${region}/${realm}/${character}`;
      message = <span>{`Character ${charString} does not exist :(`}</span>;
    } else {
      message = <span>An error has occurred...</span>;
    }
    return <div className={classes.ErrorMessage}>{message}</div>;
  };

  guildField = name => (
    <div className={classes.GuildField}>
      <span>{`<${name}>`}</span>
    </div>
  );

  cardDetails = () => {
    const { character = this.emptyCharacter() } = this.state;
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
        ) : null}
        <br />
        <div className={classes.DetailField}>
          <span>{`LV: ${character.level}`}</span>
        </div>

        <div className={classes.DetailField}>
          <span>{`iLevel: ${character.items.averageItemLevel}`}</span>
        </div>

        <div className={classes.DetailField}>
          <span>{`HKs: ${character.totalHonorableKills}`}</span>
        </div>

        <div className={classes.DetailField}>
          <span>{`Achievement Points: ${character.achievementPoints}`}</span>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { error, expanded } = this.state;

    return (
      <div className={this.expandable(classes.FriendCard)}>
        <div
          role="button"
          aria-expanded={expanded}
          tabIndex="0"
          className={this.expandable(classes.MediumCardImage)}
          style={{ backgroundImage: `url('${this.charImageUrlForState()}')` }}
          onClick={() => this.toggleExpand()}
          onKeyPress={e => {
            if (e.key === 'Enter') this.toggleExpand();
          }}
        />
        <div className={classes.InfoHolder}>
          {error ? this.errorMessage(error) : this.cardDetails()}
        </div>
      </div>
    );
  }
}

FriendCard.propTypes = {
  battlenet: PropTypes.instanceOf(Battlenet).isRequired,
  region: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default FriendCard;
