import React from "react";
import { Grid, Image, Flex } from "@chakra-ui/core";

import { Layout } from "../components/layout";

type GridImageProps = {
  imageUrl: string;
  key: number;
};

const GridImage = ({ imageUrl }: GridImageProps) => (
  <Image
    fallbackSrc="https://via.placeholder.com/293"
    size="293px"
    src={imageUrl}
    alt="random image"
  />
);

const Home = () => (
  <Layout>
    <Flex justify="center" mt={6}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {[...new Array(9)].map((_, i) => (
          <GridImage
            key={i}
            imageUrl={`https://picsum.photos/293?random=${i}.webp`}
          />
        ))}
      </Grid>
    </Flex>
  </Layout>
);

export default Home;
