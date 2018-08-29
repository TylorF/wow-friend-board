import axios from 'axios';

//
class Battlenet {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  characterData = (region, realm, character, fields) =>
    axios
      .get(this.characterDataUrl(this.apiKey, region, realm, character, fields))
      .catch(e => {
        // I want errors to go to the console always so we can investigate them
        // eslint-disable-next-line no-console
        console.log(e);
        throw e;
      });

  // Type is avatar, main, inset
  // https://render-{region}.worldofwarcraft.com/character/{character.thumbnail}
  characterImageUrl = (region, thumbnailUrl, type) => {
    const prefix = 'https://render-';
    const body = '.worldofwarcraft.com/character/';
    const thumbnailKey = thumbnailUrl.replace('avatar.jpg', `${type}.jpg`);
    return `${prefix}${region}${body}${thumbnailKey}?alt=/wow/static/images/2d/avatar/1-0.jpg`;
  };

  characterDataUrl = (apiKey, region, realm, character, fields = []) => {
    const fieldString = `${
      fields.length > 0 ? `&fields=${fields.join(',')}` : ''
    }`;

    const url = `https://${region}.api.battle.net/wow/character/${realm}/${character}`;
    const params = `?locale=en_US&apikey=${apiKey}${fieldString}`;
    return `${url}${params}`;
  };
}

export default Battlenet;