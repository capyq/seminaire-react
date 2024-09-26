import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './MyFakeShop.css'


type ProductType = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

type ProductCart = ProductType & { quantity: number }

const ProductContext = React.createContext({ product: [] as ProductCart[], setProduct: (p: ProductCart[]) => { } })
const MyFakeShop = () => {
    const [product, setProductState] = useState<ProductCart[]>([]);
    const setProduct = useCallback((p: ProductCart[]) => setProductState(p), [])
    return (
        <div className="mainContent" >
            <div>
                <p>My Fake Shop</p>
                <div className="header">
                    <Link to="/MyFakeShop">Home</Link>
                    <Link to="/MyFakeShop/Shop">Shop</Link>
                    <Link to="/MyFakeShop/Cart">Cart</Link>
                </div>
            </div>
            <ProductContext.Provider value={{ product, setProduct }}>
                <Routes>
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </ProductContext.Provider>

            <div>
                <p>Footer</p>
            </div>

        </div>
    )
}

const Home = () => {
    return <h2 >Welcom to my Shop</h2>
}
const Shop = () => {
    const [products, setProducts] = useState<ProductType[]>();
    console.log("🚀 QCA :  ~ Shop ~ products:", products?.reduce((acc,p)=> {acc[p.category] = (acc[p.category] || 0)+1; return acc},{} as Record<string,number>));
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

const ProductCartDisplay = (props: { product: ProductCart }) => {
    return <><p key={`${props.product.id}-title`}>{props.product.title}</p><p key={`${props.product.id}-quantity`}>{props.product.quantity}</p></>
}
export default MyFakeShop;
