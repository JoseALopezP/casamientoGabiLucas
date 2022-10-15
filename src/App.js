import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Introduction from "./components/Introduction";
import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Introduction/>
      <Counter/>
      <Routes>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
