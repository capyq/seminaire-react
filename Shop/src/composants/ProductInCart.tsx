import { Product } from "../types/product";

type ProductCartProps = {
  product: Product;
};
const ProductInCart = ({product}: ProductCartProps) => (
  <>
    <p>{product.title}</p>
    <p>{product.quantity}</p>
  </>
);

export default ProductInCart;
