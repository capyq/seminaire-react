import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

export const ThemeUpdater: React.FC = () => {
  const {setTheme} = useContext(ThemeContext);
  const [newTheme, setNewTheme] = useState<string>('');
  const handleThemeChange: React.ChangeEventHandler<HTMLInputElement> = (newThemeEvent) => {
    setNewTheme(newThemeEvent.target.value);
  };
  const handleThemeClick = () => {
    setTheme(newTheme);
  };
  return (
    <div>
      <h1>Theme Updater</h1>
      <p id="label-theme">select Theme</p>
      <input aria-label="label-theme" type="text" onChange={handleThemeChange} />
      <button onClick={handleThemeClick}>Change Theme</button>
    </div>
  );
};
