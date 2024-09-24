import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./context";
import { ProductCart, ProductType } from "./type";

export default () => {
    const [products, setProducts] = useState<ProductType[]>();
    const productList = useContext(ProductContext);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json as ProductType[]))
    }, []);

    const handleAddCart = (product: ProductType) => () => {
        const ClickedProduct = productList.product.find(p => p.id === product.id);
        if (ClickedProduct) {
            ClickedProduct.quantity++
            productList.setProduct([...productList.product])
        } else {
            const newProductToCart: ProductCart = { ...product, quantity: 1 };
            productList.setProduct([...productList.product, newProductToCart])

        }
    };
    return (
        <div className="product-content-display">
            {!products && <div className="lds-dual-ring"></div>}
            {
                products?.map(product =>
                    <div key={product.id} >
                        <img alt="noImage" src={product.image} />
                        <p >{product.title}</p>
                        <p>{product.price}€</p>
                        <button onClick={handleAddCart(product)}>AddCart</button>
                    </div>
                )
            }
        </div >)
}