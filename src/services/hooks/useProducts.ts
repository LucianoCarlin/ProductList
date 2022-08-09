import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

export interface ProductProps {
  id: number;
  name: string;
  imageURL: string;
  listPrice: number;
  salePrice: number;
}

export interface GetProductsProps {
  totalCount: number;
  products: ProductProps[];
}

export async function getProducts(page: number): Promise<GetProductsProps> {
  const { data, headers } = await api.get("products", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const products = data?.products.map((product: ProductProps) => {
    return {
      id: product.id,
      name: product.name,
      imageURL: product.imageURL,
      listPrice: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.listPrice),
      salePrice: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.salePrice),
    };
  });
  return {
    products,
    totalCount,
  };
}

export function useProducts(page: number) {
  return useQuery(["products", page], () => getProducts(page), {
    staleTime: 3000 * 10, //30s
  });
}
