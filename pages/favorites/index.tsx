import { Layout } from "@/components/layouts";
import { Favs, NoFavs } from "@/components/ui";
import { localFavorites } from "@/utils";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Favorites: NextPage = () => {
  const [favsPoke, setFavsPoke] = useState<number[]>([]);

  useEffect(() => {
    setFavsPoke(localFavorites.pokemons());
  }, []);

  return (
    <Layout titleTag={"Listado de pokemons"}>
      {favsPoke.length === 0 ? (
        <NoFavs />
      ) : (
        <Favs favsPoke={favsPoke}/>
      )}
    </Layout>
  );
};

export default Favorites;
 