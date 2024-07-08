import { useTest } from "../hooks/test.hook";

export const TestApi = () => {
  const { request, load } = useTest();
  const _BaseUrl = `https://gateway.marvel.com:443/v1/public`;
  const _ApiKEY = `c5d6fc8b83116d92ed468ce36bac6c62`;
  const _BaseOffset = "210";

  const getAllCharactersTEST = (offset = _BaseOffset) => {
    return request(
      `${_BaseUrl}/characters?limit=9&offset=${offset}&apikey=${_ApiKEY}`
    );
  };
  return {
    getAllCharactersTEST,
    load,
  };
};
