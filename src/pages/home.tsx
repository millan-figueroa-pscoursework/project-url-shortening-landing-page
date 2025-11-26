import Hero from "../components/Hero";
import URLShortenerForm from "../components/URLShortenerForm";
import StatsSection from "../components/StatsSection";
import BoostCTA from "../components/BoostCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <URLShortenerForm />

      {/* Grey background section */}
      <div className="bg-gray-200">
        <StatsSection />
        <BoostCTA />
      </div>
    </>
  );
}
