const toogleFavorites = (pokData: any) => {
  let favorites: any[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (favorites.some((e) => e.id === pokData.id)) {
    favorites = favorites.filter((poke) => poke.id !== pokData.id);
  } else {
    favorites.push(pokData);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  let favorites: any[] = JSON.parse(
    localStorage?.getItem("favorites") || "[]"
  );
  return favorites.some((e) => e.id === id);
};

const pokemons = () => {
  return JSON.parse(localStorage?.getItem("favorites") || "[]");
};

export default {
  toogleFavorites,
  existInFavorites,
  pokemons,
};
