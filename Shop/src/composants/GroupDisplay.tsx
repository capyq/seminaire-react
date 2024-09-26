import { useEffect, useState } from "react";
import { ProductAPI } from "../types/product";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

type propsParent = {
  category: string;
};

const GroupDisplay = ({ category }: propsParent) => {
  const [products, setProducts] = useState<ProductAPI[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, [category]);

  const handleClick = () => {
    navigate("/shop", { state: { category } });
  };

  return (
    <Card>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "2rem 6rem 6rem",
          height:"14rem",
          overflow: "hidden",
        }}
      >
        <p style={{ width: "10rem", gridColumn: "span 2", margin: "0" }}>
          {category}
        </p>
        {products.map((product) => (
          <div key={product.id} onClick={handleClick} style={{height:"6rem"}}>
            <img height={50} width={50} alt="noImage" src={product.image} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default GroupDisplay;
