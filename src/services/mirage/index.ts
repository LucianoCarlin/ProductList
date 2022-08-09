import React from "react";
import { createServer, Factory, Model, Response } from "miragejs";
import { faker } from "@faker-js/faker";

interface ProductProps {
  id: number;
  name: string;
  image_URL: string;
  list_price: number;
  sale_price: number;
}

export function makeServer() {
  const server = createServer({
    models: {
      product: Model.extend<Partial<ProductProps>>({}),
    },

    factories: {
      product: Factory.extend({
        id(i: number) {
          return `${i + 1}`;
        },
        name() {
          return faker.commerce.productName();
        },
        imageURL() {
          return faker.image.imageUrl(640, 640, "phone", true);
        },
        listPrice() {
          return faker.commerce.price(100, 500, 2);
        },
        salePrice() {
          return faker.commerce.price(100, 700, 2);
        },
      }),
    },

    seeds(server) {
      server.createList("product", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/products", function (schema, request) {
        const { page = 1, per_page = 6 } = request.queryParams;

        const total = schema.all("product").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const products = this.serialize(schema.all("product")).products.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200,
          {
            "x-total-count": String(total),
          },
          { products }
        );
      });
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
