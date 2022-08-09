import React, { useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useProducts } from "../services/hooks/useProducts";
import { Pagination } from "../components/Pagination";
import { PrivacyPolicy } from "../components/Footer/PrivacyPolicy";
import { Header } from "../components/Header/Header";
import { Like } from "../components/Like";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { Price } from "../components/Price";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useProducts(page);

  return (
    <Box>
      <Header />
      {isLoading ? (
        <SpinnerLoading />
      ) : error ? (
        <Flex color="black">
          Não foi possível realizar a consulta, tente novamente
        </Flex>
      ) : (
        <>
          <Flex
            fontSize="2rem"
            alignItems="center"
            justifyContent="center"
            p="4"
            color="black"
          >
            Produtos em destaque
          </Flex>
          <SimpleGrid
            columns={[1, null, 2, null, 3, null, 4]}
            spacing="1rem"
            pl="4rem"
            pr="4rem"
          >
            {data?.products?.map((p) => (
              <Flex key={p.id} alignItems="center" flexDirection="column">
                <Box color="white">{p.name}</Box>
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={p.imageURL}
                  alt={p.imageURL}
                />
                <Price text="De:" amount={p.listPrice} />
                <Price text="Por:" amount={p.salePrice} />
                <Like />
              </Flex>
            ))}
          </SimpleGrid>
          <Pagination
            totalCountRegisters={data?.totalCount}
            currentPage={page}
            onPageChange={setPage}
          />
        </>
      )}
      {!isLoading && <PrivacyPolicy />}
    </Box>
  );
}

/* export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/products", {
    params: {
      _limit: 6,
    },
  });

  const products = response.data.map((product: ProductProps) => {
    return {
      id: product.id,
      name: product.name,
      imageURL: product.imageURL,
      listPrice: product.listPrice,
      salePrice: product.salePrice,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 3000 * 10, //30s
  };
}; */
