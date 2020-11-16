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
<<<<<<< HEAD
        <Detail path="/:id" />
        <Update path="/:id/edit" />
=======
        <Detail path="product/:id" />
>>>>>>> 9a095625767dc80d6a97a8dbfaba3222ea42401e
      </Router>
    </div>
  );
}
export default App;
