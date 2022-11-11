import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ListProvider } from "./components/Context/ListContext";
import { GListProvider } from "./components/Context/GiftListContext";
import { GiftedListProvider } from "./components/Context/GiftedListContext";
import Dinner from "./components/Dinner";
import After from "./components/After";
import CoupleControl from "./components/CoupleControl";


function App() {
  return (
    <div>
      <ListProvider>
      <GListProvider>
      <GiftedListProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoupleControl/>} />
        <Route path="/cena" element={<Dinner/>} />
        <Route path="/dcena" element={<After/>} />
      </Routes>
      </BrowserRouter>
      </GiftedListProvider>
      </GListProvider>
      </ListProvider>
    </div>
  );
}

export default App;
