import Hero from "../components/Hero";
import URLShortenerForm from "../components/URLShortenerForm";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <URLShortenerForm />

      {/* Grey background section */}
      <div className="bg-gray-200">
        <StatsSection />
        {/* Later: shortened links, boost CTA */}
        <Footer />
      </div>
    </>
  );
}
