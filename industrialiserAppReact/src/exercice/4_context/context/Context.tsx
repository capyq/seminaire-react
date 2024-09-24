import React from 'react';
import { ThemeUpdater } from './ThemeUpdater';
import { ParentComponent } from './ParentComponent';
import { ThemeProvider } from './ThemeProvider';


export const Context: React.FC = () => {

  return (
    <ThemeProvider>
      <ThemeUpdater />
      <ParentComponent/>
    </ThemeProvider>
  );
};
