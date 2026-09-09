import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Amenities } from './components/Amenities';
import { Itapura } from './components/Itapura';
import { Gallery } from './components/Gallery';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Itapura />
        <Gallery />
        <BookingCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
