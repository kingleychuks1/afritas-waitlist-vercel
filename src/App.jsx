import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Waitlist from "./pages/Waitlist.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/waitlist" element={<Waitlist />} />
    </Routes>
  );
}
