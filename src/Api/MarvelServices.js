import axios from "axios";

import { useHttp } from "../hooks/http.hooks";

const useMarvelServices = () => {
  const { errorMessage, request, loading } = useHttp();
  const _BaseUrl = `https://gateway.marvel.com:443/v1/public`;
  const _ApiKEY = `c5d6fc8b83116d92ed468ce36bac6c62`;
  const _BaseOffset = "210";
  const _CharactersParam = "characters";
  const _ComicsParam = "comics";
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
      `${_BaseUrl}/${_CharactersParam}?limit=9&offset=${offset}&apikey=${_ApiKEY}`
    );
  };

  const getOneCharacter = async (id) => {
    const res = await request(
      `${_BaseUrl}/${_CharactersParam}/${id}?limit=9&offset=210&apikey=${_ApiKEY}`
    );

    return _transformChar(res[0]);
  };

  const _transformChar = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
    };
  };

  ////////////////// COMICS

  const getAllComics = (offset = _BaseOffset) => {
    return request(
      `${_BaseUrl}/${_ComicsParam}?limit=9&offset=${offset}&apikey=${_ApiKEY}`
    );
  };
  const getOneComic = async (id) => {
    const res = await request(
      `${_BaseUrl}/${_ComicsParam}/${id}?limit=9&offset=210&apikey=${_ApiKEY}`
    );
    return _transformComic(res[0]);
  };

  const _transformComic = (comic) => {
    return {
      id: comic.id,
      title: comic.title,
      description: comic.description,
      prices: comic[0].price,
      page: comic.pageCount,
      thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
    };
  };
  const _transformAllComics = (comic) => {
    return {
      title: comic.title,
      thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
    };
  };
  return {
    getAllCharacters,
    getAllComics,
    getOneComic,
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
