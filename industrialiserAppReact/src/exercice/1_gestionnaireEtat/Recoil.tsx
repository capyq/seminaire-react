import { atom, useRecoilState } from 'recoil';

// Définition de l'atome Recoil
const counterState = atom({
  key: 'counterState',
  default: 0,
});

// Composant utilisant Recoil
export const RecoilComponant = () => {
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
