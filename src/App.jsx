import { useState } from 'react'
import {
  Home,
  Sms,
  Yell,
  Pbb,
  ApgFest,
  Mading,
  Gita,
  Pionering,
  Msc,
  FilterasiAir,
  Sac,
  Regu,
  ReguPi,
  Pangkalan,
} from "./pages";
import "./App.css";
import { Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sms" element={<Sms />} />
      <Route path="/yell" element={<Yell />} />
      <Route path="/pbb" element={<Pbb />} />
      <Route path="/apgfest" element={<ApgFest />} />
      <Route path="/mading" element={<Mading />} />
      <Route path="/gita-galang" element={<Gita />} />
      <Route path="/pionering" element={<Pionering />} />
      <Route path="/msc" element={<Msc />} />
      <Route path="/filterasi-air" element={<FilterasiAir />} />
      <Route path="/sac" element={<Sac />} />
      <Route path="/regu" element={<Regu />} />
      <Route path="/regu-putri" element={<ReguPi />} />
      <Route path="/pangkalan" element={<Pangkalan />} />
    </Routes>
  );
}

export default App
