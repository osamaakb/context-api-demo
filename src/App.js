import React, { useContext } from "react";
import One from "./components/One.js";
import Two from "./components/Two.js";
import Loading from './components/Loading';
import { StateContext } from "./State";

export default function App() {
  const [state, dispatch] = useContext(StateContext);

  return (

    <div className="App" style={{ height: '100vh' }}>
      {state.isLoading && <Loading />}
      <One />
      <Two />
    </div>
  );
}
