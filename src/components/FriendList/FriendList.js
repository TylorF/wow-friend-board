import React from 'react';

import FriendCard from '../FriendCard/FriendCard';
const friendList = (props) => {
    
    
    return (
        props.characters.map((char) => {
            return (
              <FriendCard 
                key={char.name}
                apikey={props.apiKey}
                region={char.region}
                realm={char.realm}
                character={char.name}
              />
            );
          })
    );
}


export default friendList;