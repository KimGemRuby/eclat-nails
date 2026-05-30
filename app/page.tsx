import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
