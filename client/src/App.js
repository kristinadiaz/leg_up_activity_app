import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import TopNav from "./components/TopNav";

export default function App() {
  const [user, setUser] = useState();

  const header = <h1>Leg Up</h1>;

  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Header header={header} />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/home" element={<Home header={header} />} />
      </Routes>
    </div>
  );
}
