import Banner from '@/components/home/banner';
import DiagonalMarquee from '@/components/ui/DiagonalMarquee';
import About from '@/components/home/about';
import LogoSection from '@/components/home/LogoSection';
import Service from '@/components/home/service';
import WhychooseUs from '@/components/home/WhyUs';
import Testimonial from '@/components/home/testimonial';
import ContactSection from '@/components/home/ContactSection';


function Home() {
    return (
      <>
        <Banner id="home"/>
        <DiagonalMarquee text="India's fastest-growing logistics company" text2=" Reliability, Experience, Excellence" />
        <LogoSection />
        <About id="about"/>
        <Service id="services"/>
        <WhychooseUs id="whyus"/>
        <Testimonial id="testimonial"/>
        <ContactSection id="contact"/>
      </>
    )
  }

  export default Home