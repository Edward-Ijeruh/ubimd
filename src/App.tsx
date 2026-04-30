import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Providers from "./pages/Providers";
import Pricing from "./pages/Pricing";
import Patients from "./pages/Patients";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
