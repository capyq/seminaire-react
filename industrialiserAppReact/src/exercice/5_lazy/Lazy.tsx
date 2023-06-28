import { useCallback, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { ProductContext } from "./context";
import Home from "./Home";
import Shop from "./Shop";
import { ProductCart } from "./type";

const Lazy = () => {
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

export default Lazy;
