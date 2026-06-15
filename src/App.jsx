import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Transcripts from "./pages/Transcripts";
import WebDevelopment from "./pages/WebDevelopment";
import MusicCareer from "./pages/MusicCareer";

export default function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transcripts" element={<Transcripts />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/music-career" element={<MusicCareer />} />
      </Routes>
    </BrowserRouter>
  );
}
