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
    </Routes>
  );
}

export default App
