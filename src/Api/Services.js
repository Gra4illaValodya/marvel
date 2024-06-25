import axios from "axios";

export const AllHeroes = async () => {
  const BASE_URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=`;
  const _KEY = "c5d6fc8b83116d92ed468ce36bac6c62";
  try {
    const res = await axios.get(`${BASE_URL}${_KEY}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("services", error);
    throw error;
  }
};

export const RandomHero = async () => {
  const getId = () => {
    const min = 1009150;
    const max = 1010400;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  };

  const randomID = getId();
  console.log(randomID);
  const BASE_URL = `https://gateway.marvel.com:443/v1/public/characters/${randomID}?apikey=`;
  const _KEY = "c5d6fc8b83116d92ed468ce36bac6c62";
  console.log(BASE_URL + _KEY);
  try {
    const res = await axios.get(`${BASE_URL}${_KEY}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("services", error);
    throw error;
  }
};

export const RandomHeroById = async (id) => {
  const BASE_URL = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=`;
  const _KEY = "c5d6fc8b83116d92ed468ce36bac6c62";

  try {
    const res = await `${BASE_URL}${_KEY}`;
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("services", error);
  }
};
