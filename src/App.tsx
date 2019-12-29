import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { reducer, intitialState } from './Context/user.reducer';
import { StateContext, DispatchContext } from "./Context/state";
import { Family } from './Component/Family';
function App() {

  const [state, dispatch] = useReducer(reducer, intitialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </header>
          <Family/>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
