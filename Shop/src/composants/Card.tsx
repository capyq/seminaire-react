import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => (
  <div
    style={{
      width: "10rem",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    }}
  >
    {props.children}
  </div>
);

export default Card;
