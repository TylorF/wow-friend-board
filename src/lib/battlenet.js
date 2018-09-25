import axios from 'axios';
import { deepExtractKeyValues } from './Utils';

export const ICON_SIZES = { small: 18, medium: 36, large: 56 };

//
class Battlenet {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.spellCache = JSON.parse(localStorage.getItem('spellCache') || '{}');
  }

  getCharacterData = (
    region,
    realm,
    character,
    fields,
    preloadAuxData = true
  ) =>
    axios
      .get(this.characterDataUrl(this.apiKey, region, realm, character, fields))
      .catch(e => {
        // I want errors to go to the console always so we can investigate them
        // eslint-disable-next-line no-console
        console.log(e);
        throw e;
      })
      .then(resp => {
        const charData = resp.data;
        if (!preloadAuxData) return { charData, spells: {} };

        // Run the data preloaders
        return Promise.all([this.loadCharacterSpells(charData)]).then(
          ([spells]) => ({
            charData,
            spells
          })
        );
      });

  getSpell = spellId => {
    if (this.spellCache[spellId]) {
      return Promise.resolve(this.spellCache[spellId]);
    }
    return axios.get(this.spellDataUrl(this.apiKey, spellId)).then(resp => {
      const { data } = resp;
      this.spellCache[spellId] = data;
      localStorage.setItem('spellCache', JSON.stringify(this.spellCache));
      return data;
    });
  };

  getSpells = spellIds =>
    Promise.all(spellIds.map(spellId => this.getSpell(spellId))).then(spells =>
      spells.reduce((obj, spell) => ({ ...obj, [spell.id]: spell }), {})
    );

  loadCharacterSpells = charData =>
    this.getSpells(this.extractSpellIdsFromCharacter(charData));

  extractSpellIdsFromCharacter = charData =>
    deepExtractKeyValues(charData, 'spellId').filter(id => id > 0);

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

  spellDataUrl = (apiKey, spellId) =>
    `https://us.api.battle.net/wow/spell/${spellId}?locale=en_US&apikey=${apiKey}`;

  // TODO: region
  iconImageUrl = (icon, size = 'large') => {
    const sizeKey = ICON_SIZES[size];
    if (!icon || !sizeKey) return null; // TODO: Default icon/size
    return `https://render-us.worldofwarcraft.com/icons/${sizeKey}/${icon}.jpg`;
  };
}

export default Battlenet;
