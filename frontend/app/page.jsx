import Chrome from '../components/Chrome';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AIEnablement from '../components/AIEnablement';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import AICompany from '../components/AICompany';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import ClientScripts from '../components/ClientScripts';

export default function Page() {
  return (
    <>
      <Chrome />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AIEnablement />
      <WhyChooseUs />
      <Contact />
      <AICompany />
      <Testimonials />
      <Clients />
      <Gallery />
      <Footer />
      <ClientScripts />
    </>
  );
}
