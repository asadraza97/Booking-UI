import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import List from "./page/list/List";
import Hotel from "./page/hotel/Hotel";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotels:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}