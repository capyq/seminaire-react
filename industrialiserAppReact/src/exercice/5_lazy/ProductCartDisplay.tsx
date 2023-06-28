import { ProductCart } from "./type";

const ProductCartDisplay = (props: { product: ProductCart }) => {
    return <><p key={`${props.product.id}-title`}>{props.product.title}</p><p key={`${props.product.id}-quantity`}>{props.product.quantity}</p></>
}

export default ProductCartDisplay;