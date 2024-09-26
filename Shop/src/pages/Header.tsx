import { Link, Outlet } from "react-router-dom";

const Header = () => (
  <div style={{height:"90vh",width:"90vw",display:"grid", gridTemplateRows:"3rem 1fr"}}>
      <div style={{display:"flex",gap:"3rem",justifyContent:"center"}}>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    <Outlet />
  </div>
);

export default Header;
