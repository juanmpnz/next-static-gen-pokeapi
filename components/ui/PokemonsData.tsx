import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import React from "react";

interface Props {
  pokemon: {
    name: string;
    sprites: any;
    weight: number;
  };
}

export const PokemonsData = ({ pokemon }: Props) => {
  return (
    <Grid.Container gap={2} css={{ marginTop: "12px" }}>
      <Grid xs={12} sm={4}>
        <Card>
          <Text h1 transform="capitalize" css={{ padding: "12px" }}>
            {pokemon.name}
          </Text>
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
  );
};
