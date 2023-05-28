import { useTheme, Image, Text, Grid } from "@nextui-org/react";
import NextLink from "next/link";

export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      className="navbar_container"
      style={{ backgroundColor: theme?.colors.gray100.value }}
    >
      <Grid xs={12} sm={4} justify="flex-start">
        <Text>GROW</Text>
      </Grid>
      <Grid xs={12} sm={4} justify="center">
        <NextLink href={"/"} passHref>
          <Image
            css={{ padding: "8px 0px " }}
            showSkeleton
            width={150}
            objectFit="cover"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="Default Image"
          />
        </NextLink>
      </Grid>
      <Grid xs={12} sm={4} justify="flex-end">
        <NextLink href={"/favorites"} passHref>
          <Text>FAVORITES</Text>
        </NextLink>
      </Grid>
    </div>
  );
};
