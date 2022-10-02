import logo from "./logo.svg";
import "./App.css";
import supabase from "./config/supabase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Create from "./screens/Create";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
