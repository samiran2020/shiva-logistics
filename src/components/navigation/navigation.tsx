// import { Button } from "../ui/button"
// import { ModeToggle } from "../theme/theme-toggel";
// function Navigation() {
//     return (
//       <div className="navbar  w-full ">
//       <div className='container'>
//           <Button onClick={() =>  window.open('/','_self')}>
//               Home
//           </Button>
//           <Button onClick={() =>  window.open('/about','_self')} className=" bg-cust-bg">
//               About
//           </Button>
//           <ModeToggle/>
//       </div>
//   </div>
//     )
//   }

//   export default Navigation;


import { useEffect, useState } from "react";
import { ModeToggle } from "../theme/theme-toggel";
import Logo from "@/assets/image/siva-logistic.svg";
import { HousePlus, Phone, } from "lucide-react";
import CtaButton from "../ui/CtaButton";
import { Link } from "react-router-dom";
import Darklogo from "@/assets/image/fooiter-logo.svg";

const menu = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact Us" },
];

export default function Navigation() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      menu.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`menu top-0 z-50 transition-all duration-300 border-t-[6px] border-t-[#EC7823] border-t-solid  bg-white dark:bg-gray-900
        ${isSticky ? " sticky-menu fixed bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-white/10 w-full py-[10px]" : "relative py-[30px]"}
      `}>
      <div className="container  grid grid-cols-12 items-center">
        <nav className="col-span-5 xl:col-span-4 flex items-center">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={active === item.id ? "nav-button active bg-transparent text-darkText font-medium text-base border-0  py-[0px] m-0 px-6 border-r border-r-[#D0D0D0] rounded-none last:border-0 last:mr-0 hover:text-orange transition-colors duration-300 hover:border-r-[#D0D0D0] " : " bg-transparent text-darkText font-medium text-base border-0  py-[0px] m-0 px-6 border-r border-r-[#D0D0D0] rounded-none last:border-0 last:mr-0 hover:text-orange transition-colors duration-300 hover:border-r-[#D0D0D0] "}
            >
              {item.id === "home" ? <HousePlus size={20} /> : item.label}

            </button>
          ))}
        </nav>
        <div className="logo col-span-2 xl:col-span-4 flex justify-center">
          <img src={Logo} alt="Logo" className=" dark:hidden"/>
          <img src={Darklogo} alt="Logo" className=" hidden dark:block"/>
        </div>
        <div className="col-span-5 xl:col-span-4 justify-end flex gap-4 items-center">
          <Link to="tel:+919825802516" className=" flex items-center gap-2 text-darkText font-medium text-base hover:text-orange transition-colors duration-300">
            <span className=" w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white text-sm">
              <Phone size={16} />
            </span>
            9825802516
          </Link>
          <CtaButton link="/about" title="Enquiry Now" />
          <ModeToggle/>
        </div>
       
      </div>
    </header>
  );
}
