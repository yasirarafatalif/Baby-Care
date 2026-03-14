import Cta from "@/Components/Items/Home/CTA";
import CTA from "@/Components/Items/Home/CTA";
import HowItWorks from "@/Components/Items/Home/HowItWorks";
import Testimonials from "@/Components/Items/Home/Testimonials";
import WhyChooseUs from "@/Components/Items/Home/WhyChooseUs";
import HeroSlider from "@/Components/Section/HeroSlider";
import Services from "@/Components/Section/Services";


export default function HomePage() {
  return (
   <div className="">
   <HeroSlider></HeroSlider>
   <Services></Services>
   <HowItWorks></HowItWorks>
   <WhyChooseUs></WhyChooseUs>
   <Testimonials></Testimonials>
   <Cta></Cta>
   
    {/* <Button>Click Me</Button> */}
   </div>
  );
}
