import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import WhyMe from '@/components/WhyMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-[#0b0f19] text-gray-100 overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Gallery />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
}
