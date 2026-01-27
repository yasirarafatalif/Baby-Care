import Hero from "@/Components/Section/Hero";
import HeroSlider from "@/Components/Section/HeroSlider";
import Services from "@/Components/Section/Services";
import { Button } from "@/Components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className="">
   {/* <Hero></Hero> */}
   <HeroSlider></HeroSlider>
   <Services></Services>
   
    {/* <Button>Click Me</Button> */}
   </div>
  );
}
