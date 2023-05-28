import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokeApi } from "@/api";
import { Pokemon, PokemonListResponse, SmallPokemons } from "@/interfaces";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { getPokemonInfo, localFavorites } from "@/utils";
import confetti from "canvas-confetti";

interface Props {
  pokemon: Pokemon;
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    const setFavs = localFavorites.existInFavorites(pokemon.id)
    setIsInFavorites(setFavs);
  }, [pokemon.id]);

  const onToggleFavorite = () => {
    const pokData = {name: pokemon.name, id: pokemon.id}
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
      <Grid.Container gap={2} justify="center" css={{ marginTop: "12px" }}>
        <Grid xs={12} sm={12} justify="space-between" alignItems="center">
          <Text h1 transform="capitalize" css={{ paddingLeft: "28px" }}>
            {pokemon.name}
          </Text>

          <Button onClick={onToggleFavorite} ghost={!isInFavorites}>
            {isInFavorites ? "Quitar de favoritos" : "Agregar a favoritos"}
          </Button>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || ""}
              height={340}
              alt="Card image background"
              objectFit="cover"
            />
          </Card>
        </Grid>
        <Grid xs={12} sm={8} justify="flex-start">
          <Card css={{ padding: "0px" }}>
            <Text h3 transform="capitalize" css={{ padding: "12px" }}>
              Altura: {pokemon.height} m
            </Text>
            <Text h3 transform="capitalize" css={{ padding: "12px" }}>
              Pseo: {pokemon.weight} kg
            </Text>
            <Text h2 transform="capitalize" css={{ padding: "12px" }}>
              Sprites:
            </Text>

            <Card.Body>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default || ""}
                  height={100}
                  alt="Card image background"
                  objectFit="cover"
                  showSkeleton={true}
                />
                <Image
                  src={pokemon.sprites.front_shiny || ""}
                  height={100}
                  alt="Card image background"
                  objectFit="cover"
                  showSkeleton={true}
                />
                <Image
                  src={pokemon.sprites.back_shiny || ""}
                  height={100}
                  alt="Card image background"
                  objectFit="cover"
                  showSkeleton={true}
                />
                <Image
                  src={pokemon.sprites.back_default || ""}
                  height={100}
                  alt="Card image background"
                  objectFit="cover"
                  showSkeleton={true}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
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
    fallback: false, // si el user pone una url no valida, tira 404
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }; // params viene del contexto del lado servidor
  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByName;
