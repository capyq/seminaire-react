import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { ProductAPI } from "../types/product";
import Card from "./Card";

type ProductProps = {
  product: ProductAPI;
};

const Product = ({ product }: ProductProps) => {
  const productContext = useContext(ProductContext);
  return (
    <Card>
      <img alt="noImage" src={product.image} height={80} />
      <p style={{fontSize:"0.7rem"}}>{product.title}</p>
      <p>{product.price}€</p>
      <button onClick={() => productContext.addInCart(product)}>AddCart</button>
    </Card>
  );
};

export default Product;
