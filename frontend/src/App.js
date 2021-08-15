import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const codeParam = new URLSearchParams(window.location.search).get("code");
const App = () => {
  return (
    <div className="App">
      {codeParam ? <Dashboard code={codeParam} /> : <Login />}
    </div>
  );
};

export default App;
