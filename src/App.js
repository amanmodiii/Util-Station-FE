import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Askmeanything from './pages/Ask Me Anything/Askmeanything';
import Headinegenerator from './pages/Headline Generator/Headinegenerator';
import Qrgenerator from './pages/QR Generator/Qrgenerator';
import Textsummarizer from './pages/Text Summarizer/Textsummarizer';
import Urlshortner from './pages/URL Shortner/Urlshortner';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="body">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/askmeanything" element={<Askmeanything />} />
          <Route path="/headlinegenerator" element={<Headinegenerator />} />
          <Route path="/qrgenerator" element={<Qrgenerator />} />
          <Route path="/textsummarizer" element={<Textsummarizer />} />
          <Route path="/urlshortener" element={<Urlshortner />} />
          <Route path="*" element={<Navigate to= "/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
