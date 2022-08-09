import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { makeServer } from "../services/mirage";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
