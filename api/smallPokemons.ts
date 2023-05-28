import axios from "axios";

const SmallPokemons = axios.create({
  baseURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",
});

export default SmallPokemons;
