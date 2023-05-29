import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokeApi } from "@/api";
import { Pokemon, PokemonListResponse, SmallPokemons } from "@/interfaces";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { getPokemonInfo, localFavorites } from "@/utils";
import confetti from "canvas-confetti";
import { PokemonsData } from "@/components/ui";

interface Props {
  pokemon: Pokemon;
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    const setFavs = localFavorites.existInFavorites(pokemon.id);
    setIsInFavorites(setFavs);
  }, [pokemon.id]);

  const onToggleFavorite = () => {
    const pokData = { name: pokemon.name, id: pokemon.id };
    localFavorites.toogleFavorites(pokData);
    setIsInFavorites(!isInFavorites);
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout titleTag={pokemon.name}>
      <PokemonsData pokemon={pokemon} />
      <Grid xs={12} sm={12} justify="flex-end" alignItems="center">
        <Button onClick={onToggleFavorite} ghost={!isInFavorites}>
          {isInFavorites ? "Quitar de favoritos" : "Agregar a favoritos"}
        </Button>
      </Grid>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // las props que estoy retornando aqui, las voy a recibir en las props del componente
  const { data } = await pokeApi.get<PokemonListResponse>("pokemon?limit=151");
  const pokemonsByName: SmallPokemons[] = data.results;

  return {
    paths: pokemonsByName.map(({ name }) => ({
      params: { name },
    })),
    fallback: "blocking", // si el user pone una url no valida, tira 404
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }; // params viene del contexto del lado servidor
  const pokemonData = await getPokemonInfo(name);

  if (!pokemonData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon: pokemonData,
    },
    revalidate: 86400,
  };
};

export default PokemonByName;
