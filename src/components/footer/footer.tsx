
import logoIcon from "@/assets/image/icon/siva-icon.svg"
import CtaButton from "../ui/CtaButton";
import ScrollToTop from "../ui/ScrollTop";
import footerLogo from"@/assets/image/fooiter-logo.svg";
import { Button } from "../ui/button";
import { ChevronRight, Clock, Facebook, Instagram, Linkedin, Mail,  Phone, Twitter, Youtube } from "lucide-react";
import FadeInUp from "../ui/FeadInUp";


interface itemProps{
link:string;
title: string;
}

const items = [
    {
       title:"home", link:"#home"
    },
    {
       title:"Contact us", link:"#contact"
    },
    {
       title:"About", link:"#about"
    },
    {
       title:"Privacy Policy  ", link:"/privacy-policy"
    },
    {
       title:"Service  ", link:"#service"
    },
    {
       title:"Terms And Conditions", link:"/terms-and-conditions"
    },

];


function Footer() {
    return (
        <div className="navbar w-full px-10 relative pb-10 overflow-hidden">
            <div className="bg-darkText dark:bg-gray-800  rounded-3xl  relative">
                <div className='container'>
                    <ScrollToTop/>
                    <div className="grid grid-cols-12 gap-8 pt-[5.5rem] pb-[3.25rem] items-center">
                        <div className="col-span-10">
                            <FadeInUp>
                                <div className=" cta-section flex flex-col gap-2 w-[50%]">
                                    <h2 className="text-white">Want to have a conversation about our logistics Relocation ?</h2>
                                    <p className="text-white text-sm font-[300]">Shivga Logistics is rapidly emerging as one of India’s leading multi-modal logistics service providers, delivering innovative and integrated solutions designed to optimize both time and cost.</p>
                                </div>
                            </FadeInUp>
                        </div>
                        <div className="col-span-2">
                            <FadeInUp>
                                <CtaButton link="#contact" title="Contact Us"  className=" subscrib-btn bg-orange text-white dark:border-gray-800 " />
                            </FadeInUp>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-8 py-16  items-center border  border-white/10 border-r-0 border-l-0">
                        <div className="col-span-3 2xl:col-span-4">
                            <img src={footerLogo} alt="footerLogo" />
                            <p className=" text-white text-sm font-[300] mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-span-9 2xl:col-span-8 pl-12 2xl:pl-32">
                            <div className="grid grid-cols-12 gap-5">
                                <div className="quicklink col-span-5">
                                    <h5 className="text-white text-lg font-medium p-0 mb-4">Quick Link</h5>
                                    <div className="grid grid-cols-2 gap-x-1 gap-y-2">
                                        
                                        {items.map(({link,title}:itemProps) => (
                                            <Button
                                            onClick={() => window.open(link, "_self")}
                                            className=" p-0 flex gap-0 w-auto flex-row flex-wrap h-fit text-left justify-start  bg-transparent text-xs font-[300] border-0
                                             hover:bg-transparent hover:text-orange hover:border-0 focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none 
                                             dark:text-white  hover:dark:text-orange
                                            "
                                            >
                                                <span className="text-orange">
                                                    <ChevronRight size={14} />
                                                </span>   
                                                {title}
                                                
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div className="getintouch col-span-4">
                                    <h5 className="text-white text-lg font-medium p-0 mb-4">Get In Touch</h5>
                                    <div className="info flex flex-col gap-4 ">
                                        
                                        <div className="grid grid-cols-12 items-center ">
                                            <div className="col-span-1">
                                                <span className=" flex flex-col items-center justify-center text-white">
                                                    <Mail size={16}/>
                                                </span>
                                            </div>
                                            <div className="col-span-11 text-left">
                                                <p className="text-white text-xs font-[300] ">
                                                    Shivalogisticcare@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-12 items-center ">
                                            <div className="col-span-1">
                                                <span className=" flex flex-col items-center justify-center text-white">
                                                    <Phone  size={16}/>
                                                </span>
                                            </div>
                                            <div className="col-span-11 text-left">
                                                <p className="text-white text-xs font-[300] ">
                                                    +91 9826802535
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-12 items-center ">
                                            <div className="col-span-1">
                                                <span className=" flex flex-col items-center justify-center text-white">
                                                    <Clock size={16}/>
                                                </span>
                                            </div>
                                            <div className="col-span-11 text-left">
                                                <p className="text-white text-xs font-[300]">
                                                    Mon to Sat 10.30am - 6.30pm
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stayconnected col-span-3">
                                    <h5 className="text-white text-lg font-medium p-0 mb-4">Stay connected </h5>
                                    <div className="flex flex-row items-center justify-start gap-3">
                                        <Button onClick={() => window.open("/", "_blank")} className="border-0 bg-transparent text-sm text-white w-fit p-0 h-fit
                                             hover:bg-transparent hover:text-orange hover:border-0 focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none ">
                                            <Facebook />
                                        </Button>
                                        <Button onClick={() => window.open("/", "_blank")} className="border-0 bg-transparent text-sm text-white w-fit p-0 h-fit
                                             hover:bg-transparent hover:text-orange hover:border-0 focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none ">
                                            <Linkedin />
                                        </Button>
                                        <Button onClick={() => window.open("/", "_blank")} className="border-0 bg-transparent text-sm text-white w-fit p-0 h-fit
                                             hover:bg-transparent hover:text-orange hover:border-0 focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none ">
                                            <Twitter />
                                        </Button>
                                        <Button onClick={() => window.open("/", "_blank")} className="border-0 bg-transparent text-sm text-white w-fit p-0 h-fit
                                             hover:bg-transparent hover:text-orange hover:border-0 focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none ">
                                             <Instagram />
                                        </Button>
                                        <Button onClick={() => window.open("/", "_blank")} className="border-0 bg-transparent text-sm text-white w-fit p-0 h-fit
                                             hover:bg-transparent hover:text-orange hover:border-0 focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none ">
                                            <Youtube />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 flex items-center justify-center">
                          <p className="text-white text-sm font-[300]">Shiva Logistics © 2026. All Rights Reserved.</p>                      
                    </div>
                </div>
                <img src={logoIcon} alt="logoIcon" className=" w-72 h-auto absolute -right-2 -bottom-3 filter grayscale  "/>
            </div>
            
        </div>
    )
}

export default Footer;