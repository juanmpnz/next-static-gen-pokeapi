import React from "react";
import { Container, Text, Image } from "@nextui-org/react";

export const NoFavs = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh-100px)",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <Text h1> No hay favoritos</Text>
      <Image
        width={250}
        height={250}
        css={{ opacity: "0.1" }}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
      />
    </Container>
  );
};
