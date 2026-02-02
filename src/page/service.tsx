import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import backgroundImage from'../../public/images/service-big-bg.jpg';
import FadeInUp from "@/components/ui/FeadInUp";
import serviceImag from "@/assets/image/service-image.jpg";
import { CircleCheckBig } from "lucide-react";
import WhychooseUs from "@/components/home/WhyUs";
import ContactForm, { ContactField } from "@/components/ui/ContactForm";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const contactFields: ContactField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter Your Name",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter Your Phone",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter Message",
  },
];

const items = [
  {
    value: "item-1",
    trigger: "How do I get a quote for my move?",
    content:
      "To get a quote, you can either fill out our online quote request form, or you can contact our customer support team directly. We’ll gather some details about your move to provide an accurate estimate.",
  },
  {
    value: "item-2",
    trigger: "What types of items can you move?",
    content:
      "We can move a wide range of items, including household goods, office equipment, vehicles, and more. If you have specific items you’re concerned about, please let us know during the consultation.",
  },
  {
    value: "item-2",
    trigger: "Do you provide packing materials?",
    content:
      "Yes, we offer packing materials and can assist with packing if needed. Our expert packing teams use high-quality materials to ensure the safety of your belongings during the move.",
  },
  {
    value: "item-2",
    trigger: "How can I track the status of my move?",
    content:
      "We provide tracking options for your move. Our customer support team will give you access to a tracking system, and you can also contact us at any time for updates on the status of your move.",
  },
  {
    value: "item-2",
    trigger: "Do you offer insurance for my belongings?",
    content:
      "Yes, we offer goods insurance to provide additional protection for your valuable items during the move. Our team will discuss the insurance options and coverage details with you during the consultation.",
  },
]


function Service() {
    return (
      <>
      <div className="px-10 mb-3">
          <Breadcrumb >
            <BreadcrumbList className="text-center justify-start mt-4 text-gray-500" >
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-orange font-[300]">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-orange font-[300]">Service</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-500 font-[300]">Ground and Rail Freight Solutions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <section  className="page-section relative px-10 mb-10 ">
            <div className="bg-darkText dark:bg-gray-800 py-32   overflow-clip rounded-3xl " style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'conver', backgroundPosition:'top center', backgroundAttachment:'fixed' }}>
                <div className="container text-center">
                  <FadeInUp>
                    <h1 className="text-white">Ground and Rail Freight Solutions</h1>
                    <p className="text-white text-sm font-[300]">Efficient and Reliable Logistics Solutions for Your Business Needs</p>
                  </FadeInUp>
                </div>
            </div>
        </section>
        <section  className="relative px-10 mb-10 py-20">
          <div className="container">
            <div className="grid grid-cols-12">
                <div className="relative  flex items-center   col-span-4 min-h-[50vh]">
                  <div className="sticky top-32 ">
                    <FadeInUp>
                      <div className="service-image w-[400px] h-[350px] rounded-3xl overflow-hidden">
                          <img src={serviceImag} alt="service-img" className="w-full h-full object-cover object-center" />
                      </div>
                    </FadeInUp>
                  </div>
                </div>
                <div className="relative flex items-center   col-span-8 min-h-[50vh]">
                  <div className="sticky top-32 ">
                    <FadeInUp>
                      <h2 className=" text-darkText mb-4">
                        What is Lorem Ipsum?
                      </h2>
                    </FadeInUp>
                    <FadeInUp>
                    <p className="text-darkText leading-relaxed text-sm font-[300] mb-3">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    </FadeInUp>
                    <FadeInUp>
                    <p className="text-darkText leading-relaxed text-sm font-[300] mb-3">
                      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    </FadeInUp>
                    <FadeInUp>
                    <div className="point-sec">
                      <h4 className="text-xl font-semibold text-darkText mb-4">Distinguished and unique strengths of Safexpress:</h4>
                      <div className="point flex flex-row mb-2 items-center gap-2">
                        <span className=" text-sm p-0 m-0 text-orange">
                          <CircleCheckBig  size={16} className=""/>
                        </span>
                        <p className="text-darkText leading-relaxed text-sm font-[300] ">No extra charge for Sunday & holiday deliveries</p>
                      </div>
                      <div className="point flex flex-row mb-2 items-center gap-2">
                        <span className=" text-sm p-0 m-0 text-orange">
                          <CircleCheckBig  size={16} className=""/>
                        </span>
                        <p className="text-darkText leading-relaxed text-sm font-[300] ">100% E-Waybill compliance</p>
                      </div>
                      <div className="point flex flex-row mb-2 items-center gap-2">
                        <span className=" text-sm p-0 m-0 text-orange">
                          <CircleCheckBig  size={16} className=""/>
                        </span>
                        <p className="text-darkText leading-relaxed text-sm font-[300] ">NIC integration for auto E-Waybill updates & validity extension</p>
                      </div>
                      <div className="point flex flex-row mb-2 items-center gap-2">
                        <span className=" text-sm p-0 m-0 text-orange">
                          <CircleCheckBig  size={16} className=""/>
                        </span>
                        <p className="text-darkText leading-relaxed text-sm font-[300] ">Customised supply chain solutions to suit dynamic needs</p>
                      </div>
                      <div className="point flex flex-row mb-2 items-center gap-2">
                        <span className=" text-sm p-0 m-0 text-orange">
                          <CircleCheckBig  size={16} className=""/>
                        </span>
                        <p className="text-darkText leading-relaxed text-sm font-[300] ">Value-added services- Appointment deliveries</p>
                      </div>
                    </div>
                    </FadeInUp>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section  className="page-section relative px-10 mb-10 ">
            <div className="bg-lightGrey py-32   overflow-clip rounded-3xl ">
                <div className="container text-center">
                  <FadeInUp>
                    <h1 className="text-darkText">We help you provide free quotes for following services</h1>
                    <p className="text-darkText text-sm font-[300]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </FadeInUp>
                  <div className="grid grid-cols-12 mt-16 gap-5">
                    <div className="col-span-6 pr-8">
                      <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-1"
                        className="w-full border-none"
                      >
                        {items.map((item) => (
                          <FadeInUp>
                            <AccordionItem key={item.value} value={item.value} className="border-0 mb-4">
                              <AccordionTrigger className="bg-white hover:no-underline text-2xl font-normal text-darkText hover:text-orange hover:border-none border-none focus:outline-none focus-visible:outline-none ">{item.trigger}</AccordionTrigger>
                              <AccordionContent className=" text-left py-4 font-[300] text-darkText">{item.content}</AccordionContent>
                            </AccordionItem>
                          </FadeInUp>
                        ))}
                      </Accordion>
                    </div>
                    <div className="col-span-6">
                      <ContactForm
                          title="Request a Quote For Your Logistics"
                          fields={contactFields}
                          submitText="Submit Request"
                          onSubmit={(data) => {
                              console.log("Form Data:", data);
                          }}
                          className="bg-[#e9edf7]"
                      />
                    </div>
                  </div>
                </div>
            </div>
        </section>
        <WhychooseUs id={""}/>
        
      </>
    )
  }

 export default Service;