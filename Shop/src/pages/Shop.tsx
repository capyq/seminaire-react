import { useLocation } from "react-router-dom";
import Product from "../composants/Product";
import { ProductAPI } from "../types/product";
import { useEffect, useState } from "react";

const Shop = () => {
  const {state} = useLocation();
  
  const [products, setProducts] = useState<ProductAPI[]>([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products/";
    if (state?.category) {
      url = `https://fakestoreapi.com/products/category/${state.category}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProducts(json as ProductAPI[]));
  }, [state?.category]);

  return (
    <div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
