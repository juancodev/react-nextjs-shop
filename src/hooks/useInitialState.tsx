import { useState } from 'react';

const initialState: object = {
  cart: [],
  currentProduct: {},
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

  const addToDetail = (payload: unknown) => {
    setState({
      ...state,
      cart: [...state.cart],
      currentProduct: payload,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToDetail,
  };
};

export default useInitialState;
