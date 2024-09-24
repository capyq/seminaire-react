import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const GrandchildComponent: React.FC = () => {

  const {theme} = useContext(ThemeContext);
  return (
    <div>
      <h3>Grandchild Component</h3>
      <p>Theme: {theme}</p>
    </div>
  );
};
