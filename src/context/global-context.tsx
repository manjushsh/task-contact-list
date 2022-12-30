// ** React Imports
import { createContext, useState, ReactNode } from "react";

// ** Defaults
const defaultProvider: DynamicObject = {};

const GlobalStateContext = createContext<DynamicObject>(defaultProvider);

type Props = {
  children: ReactNode;
};

const GlobalStateProvider = ({ children }: Props) => {
  // ** States
  const [state, updateState] = useState<DynamicObject>(defaultProvider);
  const setState = (updateObject: SetStatePayload) =>
    updateState({
      ...state,
      [updateObject.type]: {
        ...state[updateObject.type],
        ...updateObject.payload
      }
    });

  const values = {
    state,
    setState,
    updateState
  };

  return (
    <GlobalStateContext.Provider value={values}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };

// ** Types
export interface DynamicObject {
  [key: string]: any;
}

export interface SetStatePayload {
  type: string;
  payload: DynamicObject;
}
