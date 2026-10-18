import Nav from "@/components/Nav"; import Hero from "@/components/Hero"; import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks"; import Partners from "@/components/Partners"; import Services from "@/components/Services";
import Demo from "@/components/Demo"; import Benefits from "@/components/Benefits"; import Proof from "@/components/Proof";
import Reach from "@/components/Reach"; import BlogTeaser from "@/components/BlogTeaser"; import Faq from "@/components/Faq";
import Contact from "@/components/Contact"; import Footer from "@/components/Footer";
import Split from "@/components/Split"; import Bento from "@/components/Bento"; import Compare from "@/components/Compare";
import CtaBanner from "@/components/CtaBanner"; import Gallery from "@/components/Gallery"; import ScrollBar from "@/components/ScrollBar";
export default function Home() {
  return (<><ScrollBar /><Nav /><main><Hero /><Problem /><HowItWorks /><Split /><Services /><Bento /><Partners /><Demo /><Compare /><Benefits /><Gallery /><Proof /><CtaBanner /><Reach /><BlogTeaser /><Faq /><Contact /></main><Footer /></>);
}
