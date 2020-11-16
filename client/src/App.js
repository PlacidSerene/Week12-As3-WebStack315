import React from "react";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import { Router } from "@reach/router";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
        <Update path="/:id/edit" />
      </Router>
    </div>
  );
}
export default App;
