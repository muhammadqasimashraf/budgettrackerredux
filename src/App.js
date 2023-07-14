import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
