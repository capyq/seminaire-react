import { useContext } from "react";
import { ProductContext } from "./context";
import ProductCartDisplay from "./ProductCartDisplay";

const Cart = () => {
    const productList = useContext(ProductContext);
    if (productList.product.length === 0) {
        return <div>No product in cart</div>
    }

    return (
        <div className="grid-2-col">
            <p>Product</p>
            <p>Quantity</p>
            {productList.product.map(p => <ProductCartDisplay key={p.id} product={p} />)}
        </div >
    )
}

export default Cart;