import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Collection from "./pages/collection";
import Login from "./pages/login";
import Add from "./pages/add";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
