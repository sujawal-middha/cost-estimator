import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FeatureSelection from "./pages/FeatureSelection";
import EstimateSummary from "./pages/EstimateSummary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeatureSelection />} />
          <Route path="/summary" element={<EstimateSummary />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
