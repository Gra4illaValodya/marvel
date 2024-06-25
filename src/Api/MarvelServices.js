class MarvelServices {
  _BaseUrl = `https://gateway.marvel.com:443/v1/public/`;
  _ApiKEY = `apikey=c5d6fc8b83116d92ed468ce36bac6c62`;
  getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Problem is a ${url}`);
    }
    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      `${this._BaseUrl}characters?limit=9&offset=200&${this._ApiKEY}`
    );
  };
  getCharacter = (id) => {
    return this.getResource(`${this._BaseUrl}characters/${id}?${this._ApiKEY}`);
  };
}
export default MarvelServices;
