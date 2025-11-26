import "./index.css";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import URLShortenerForm from "./components/URLShortenerForm.tsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <URLShortenerForm />
    </>
  );
}

export default App;
