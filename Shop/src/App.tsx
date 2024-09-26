import { useCallback, useState } from "react";
import "./App.css";
import { Product, ProductAPI } from "./types/product";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { ProductContext } from "./context/productContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Header from "./pages/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  const [productInCart, setProductInCart] = useState<Product[]>([]);

  const addInCart = useCallback((product: ProductAPI) => {
    setProductInCart((OldProducts) => {
      const findProduct = OldProducts.find((p) => p.id === product.id);
      if (findProduct) {
        findProduct.quantity++;
        return [...OldProducts];
      } else {
        return [...OldProducts, { ...product, quantity: 1 }];
      }
    });
  }, []);

  return (
    <>
      <ProductContext.Provider value={{ productInCart, addInCart }}>
        <RouterProvider router={router} />
      </ProductContext.Provider>
    </>
  );
}

export default App;
