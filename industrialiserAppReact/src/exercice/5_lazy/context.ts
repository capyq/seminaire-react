import React from "react";
import { ProductCart } from "./type";

export const ProductContext = React.createContext(
    { product: [] as ProductCart[], setProduct: (p: ProductCart[]) => { } })
