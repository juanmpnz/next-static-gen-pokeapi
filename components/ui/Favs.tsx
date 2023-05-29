import React from "react";
import { Button, Card, Grid, Image, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  favsPoke: any[];
}

export const Favs = ({ favsPoke }: Props) => {
  const router = useRouter();
  const onClick = (name: number) => {
    router.push(`/name/${name}`);
  };
  return (
    <>
      <Grid.Container gap={2} direction="row"  css={{marginTop:"28px"}}>
        {favsPoke.map((poke) => (
          <Grid xs={12} sm={4} xl={4} key={poke.id}>
            <Card isHoverable css={{ padding: "10px" }}>
              <Text
                css={{ color: "inherit" }}
                size={24}
                weight="bold"
                transform="uppercase"
              >
                {poke.name}
              </Text>
              <Image
                alt={poke.name}
                height={350}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
              />
              <Button
                flat
                auto
                rounded
                color="warning"
                onPress={() => onClick(poke.name)}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Detalle
                </Text>
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
