import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Introduction from "./components/Introduction";
import { ListProvider } from "./components/Context/ListContext";
import Dinner from "./components/Dinner";
import After from "./components/After";


function App() {
  return (
    <div>
      <ListProvider>
      <BrowserRouter>
      <Introduction/>
      <Routes>
        <Route path="/cena" element={<Dinner/>} />
        <Route path="/dcena" element={<After/>} />
      </Routes>
      </BrowserRouter>
      </ListProvider>
    </div>
  );
}

export default App;
