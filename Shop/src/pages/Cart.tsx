import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import ProductInCart from "../composants/ProductInCart";

const Cart = () => {
  const { productInCart } = useContext(ProductContext);
  if (productInCart.length === 0) {
    return <div>No product in cart</div>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridTemplateRows:"repeat(10,4rem)" }}>
      <p>Product</p>
      <p>Quantity</p>

      {productInCart.map((p) => (
        <ProductInCart key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Cart;
