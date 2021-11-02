import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { initialState, reducer } from './reducer';

type StoreContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const Store = createContext<StoreContextType>({
  state: initialState,
  dispatch: () => null,
});

export function StoreProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export const useStore = () => useContext(Store);
