import { createContext } from "react";
import { Product, ProductAPI } from "../types/product";

export const ProductContext = createContext({
  productInCart: [] as Product[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addInCart: (_p: ProductAPI) => {},
});
