import Hero from "./components/Hero";
import About from "./components/About";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />

      <section className="section bg-[var(--navy1)]">
        <div className="section-content">
          <About />
        </div>
      </section>

      <section className="section bg-[var(--navy2)]">
        <div className="section-content">
          <Steps />
        </div>
      </section>

      <section className="section bg-[var(--navy1)]">
        <div className="section-content">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--navy4)]">
        <div className="section-content max-w-4xl mx-auto">
          <FAQ />
        </div>
      </section>
      <Footer />
      <FloatingContact />
    </div>
  );
}
