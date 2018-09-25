// Utils for little CS algorithms and junk

// Recursively extract all of the values from an object where the key is @key
// returns an array of values, can take an array or object to search
// eslint-disable-next-line import/prefer-default-export
export function deepExtractKeyValues(obj, key) {
  if (obj === null || obj === undefined) return null;
  if (obj instanceof Array)
    return obj
      .map(val => deepExtractKeyValues(val, key))
      .filter(val => val !== null)
      .reduce((arr, val) => arr.concat(val), []);
  if (obj instanceof Object) {
    return Object.entries(obj)
      .map(([k, v]) => {
        if (k === key) return v;
        return deepExtractKeyValues(v, key);
      })
      .filter(val => val !== null)
      .reduce((arr, val) => arr.concat(val), []);
  }
  return null;
}
