import axios from "axios";
import { useTest } from "../hooks/test.hook";
import { useHttp } from "../hooks/http.hooks";

const useMarvelServices = () => {
  const { errorMessage, request, loading } = useHttp();
  const _BaseUrl = `https://gateway.marvel.com:443/v1/public`;
  const _ApiKEY = `c5d6fc8b83116d92ed468ce36bac6c62`;
  const _BaseOffset = "210";

  const fullUrl =
    "https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=10&apikey=aafa934aa7f33fe06a3d8851ad8597ea";

  // const getResource = async (url) => {
  //   try {
  //     const data = await axios.get(url);
  //     const response = data.data.data.results;
  //     return response;
  //   } catch (error) {
  //     console.log(`Failure is : ${error} `);
  //   }
  // };

  const getAllCharacters = (offset = _BaseOffset) => {
    return request(
      `${_BaseUrl}/characters?limit=9&offset=${offset}&apikey=${_ApiKEY}`
    );
  };

  const getOneCharacter = async (id) => {
    const res = await request(
      `${_BaseUrl}/characters/${id}?limit=9&offset=210&apikey=${_ApiKEY}`
    );

    return _transform(res[0]);
  };
  const _transform = (hero) => {
    return {
      id: hero.id,
      name: hero.name,
      description: hero.description,
      thumbnail: hero.thumbnail.path + "." + hero.thumbnail.extension,
    };
  };
  return {
    getAllCharacters,
    getOneCharacter,
    loading,
    errorMessage,
  };
  //   getResource = async (url) => {
  //     let res = await fetch(url);
  //     if (!res.ok) {
  //       throw new Error(`Problem is a ${url}`);
  //     }
  //     return await res.json();
  //   };

  //   getAllCharacters = () => {
  //     return this.getResource(
  //       `${this._BaseUrl}characters?limit=9&offset=200&${this._ApiKEY}`
  //     );
  //   };
  //   getCharacter = (id) => {
  //     return this.getResource(`${this._BaseUrl}characters/${id}?${this._ApiKEY}`);
  //   };
};
export default useMarvelServices;
