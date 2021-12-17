import "./App.css";
import houses from "./API-Calls/NewHouses";
import Houses from "./components/Houses";

function App() {
  return (
    <div className="App">
      <h1>Game of thrones</h1>
      <Houses houses={houses}></Houses>
    </div>
  );
}

export default App;
