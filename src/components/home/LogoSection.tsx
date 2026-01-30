import LogoCarousel from '@/components/ui/MultiCarousal';
import FadeInUp from '../ui/FeadInUp';

export type CarouselItemData = {
  id: number;
  title: string;
  image?: string | undefined;
}

import clientlogo from'/images/client1.png';

export const carouselData: CarouselItemData[] = [
  { id: 1, title: "Logistics", image: clientlogo },
  { id: 2, title: "Warehousing", image: clientlogo },
  { id: 3, title: "Distribution", image: clientlogo },
  { id: 4, title: "Supply Chain", image: clientlogo },
  { id: 5, title: "Transport", image: clientlogo },
  { id: 6, title: "Transport", image: clientlogo },
  
]


export default function LogoSection() {
  return (
    <section className='pb-36'>
        <div className="container">
            <div className="header-section text-center mb-16">
              <FadeInUp>
                <h2 className=' text-darkText'>Our Beloved Clients</h2>
                <p className='text-sm text-darkText font-normal'>Trusted by some of the best companies</p>
              </FadeInUp>
            </div>
            <div className="logo-sec relative">
                <LogoCarousel items={carouselData} />
            </div>
        </div>
    </section>
  );
}