import HowItWorks from "@/Components/Items/Home/HowItWorks";
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
   
    {/* <Button>Click Me</Button> */}
   </div>
  );
}
