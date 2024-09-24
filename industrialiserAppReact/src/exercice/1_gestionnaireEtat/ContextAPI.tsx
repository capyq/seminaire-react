import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

// Créez un contexte pour stocker l'état global
const AppContext = createContext<any>(null);

// Créez un composant fournisseur pour envelopper votre application avec le contexte
const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  return <AppContext.Provider value={{ count, setCount }}>{children}</AppContext.Provider>;
};

// Utilisez le hook useContext pour accéder à l'état global dans vos composants
const MyComponent: React.FC = () => {
  const { count, setCount } = useContext(AppContext);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export const AppContextComponent = () => {
  return (
    <AppProvider>
      <MyComponent />
    </AppProvider>
  );
};
