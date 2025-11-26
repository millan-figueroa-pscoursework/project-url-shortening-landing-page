import "./index.css";
import Header from "./components/Header.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
