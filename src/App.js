import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Introduction from "./components/Introduction";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Introduction/>
      <Routes>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
