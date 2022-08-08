import { EthProvider } from "./contexts/EthContext";
import Home from "./components/Home";
import Vote from "./components/Vote";
import Result from "./components/Result";
import {useState} from "react";
import "./App.css";
import {Router} from "@reach/router";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Router>
            <Home path = "/"/>
            <Vote path = "/vote"/>
            <Result path = "/result"/>
          </Router>
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
