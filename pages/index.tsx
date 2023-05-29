import React from "react";
import { NextPage, GetStaticProps } from "next";
import { Button, Grid } from "@nextui-org/react";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemons } from "@/interfaces";
import { CardPokemon } from "@/components/ui";

interface Props {
  pokemons: SmallPokemons[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout titleTag={"Listado de pokemons"}>
      <Grid.Container gap={2} justify="center">
        {pokemons.map((poke, i) => (
          <Grid xs={12} sm={3} key={i}>
            <CardPokemon
              name={poke.name}
              img={poke.img}
              url={poke.url}
              id={poke.id}
            />
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  // las props que estoy retornando aqui, las voy a recibir en las props del componente
  const { data } = await pokeApi.get<PokemonListResponse>("pokemon?limit=151");
  const pokemons: SmallPokemons[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
