import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { SmallPokemons } from "@/interfaces";
import { useRouter } from "next/router";

export const CardPokemon = ({ name, url, img, id }: SmallPokemons) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Card css={{ w: "100%", h: "400px", marginTop:"28px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text h2 color="white" transform="capitalize">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={img ? img : ""}
          width="100%"
          height="100%"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Text
            css={{ color: "inherit" }}
            size={12}
            weight="bold"
            transform="uppercase"
          >
            #{id}
          </Text>
        </Row>
        <Row>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="warning" onPress={onClick}>
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Detalle
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
