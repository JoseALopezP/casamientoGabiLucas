import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Introduction from "./components/Introduction";
import Dinner from "./components/Dinner";
import After from "./components/After";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Introduction/>
      <Routes>
        <Route path="/cena" element={<Dinner/>} />
        <Route path="/dcena" element={<After/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
