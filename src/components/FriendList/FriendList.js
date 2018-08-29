import React from 'react';

import FriendCard from '../FriendCard/FriendCard';

const friendList = props =>
  props.characters.map(char => (
    <FriendCard
      key={char.name}
      battlenet={props.battlenet}
      region={char.region}
      realm={char.realm}
      character={char.name}
    />
  ));

export default friendList;
