import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
    </>
    
  );
}
