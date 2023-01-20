import { useState } from 'react';

const initialState: object = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState]: any = useState(initialState);

  const addToCart = (payload: unknown) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue: number) => {
    setState({
      ...state,
      cart: state.cart.filter((_: unknown, index: number) => index !== indexValue),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
