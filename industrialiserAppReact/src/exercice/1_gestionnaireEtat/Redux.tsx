import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Define a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// Create a store
const store = configureStore({
  reducer: counterSlice.reducer,
});
export type RootState = ReturnType<typeof store.getState>

// Component using Redux
const CounterComponent = () => {
  const count = useSelector((state:RootState) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>Increment</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>Decrement</button>
    </div>
  );
};

export const ReduxComponent = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};
