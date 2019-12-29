import * as React from "react";
import { intitialState, State, Action } from "./user.reducer";

export const StateContext = React.createContext(intitialState as State);
export const DispatchContext = React.createContext((()=> 0) as React.Dispatch<Action>);

export const useGlobalState = () => React.useContext(StateContext);
export const useGlobalDispatch = () => React.useContext(DispatchContext);