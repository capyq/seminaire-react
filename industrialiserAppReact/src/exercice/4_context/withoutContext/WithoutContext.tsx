import React, { useState } from 'react';
import { ThemeUpdater } from './ThemeUpdater';
import { ParentComponent } from './ParentComponent';


export const WithoutContext: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <div>
      <ThemeUpdater setTheme={setTheme} />
      <ParentComponent theme={theme} />
    </div>
  );
};
