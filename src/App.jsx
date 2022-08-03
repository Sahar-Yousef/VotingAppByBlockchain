import { EthProvider } from "./contexts/EthContext";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Home></Home>
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
