import Nav from "@/components/Nav"; import Hero from "@/components/Hero"; import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks"; import Partners from "@/components/Partners"; import Services from "@/components/Services";
import Demo from "@/components/Demo"; import Benefits from "@/components/Benefits"; import Proof from "@/components/Proof";
import Reach from "@/components/Reach"; import BlogTeaser from "@/components/BlogTeaser"; import Faq from "@/components/Faq";
import Contact from "@/components/Contact"; import Footer from "@/components/Footer";
import Split from "@/components/Split"; import Bento from "@/components/Bento"; import Compare from "@/components/Compare";
import CtaBanner from "@/components/CtaBanner"; import Journey3D from "@/components/Journey3D"; import Gallery from "@/components/Gallery"; import ScrollBar from "@/components/ScrollBar"; import TiltInit from "@/components/TiltInit";
const T = ({ t, children, c = "" }: { t: "ink" | "navy" | "ivory" | "sand"; children: React.ReactNode; c?: string }) => <div className={`tone tone-${t} ${t === "ink" || t === "navy" ? "tone-dark" : "tone-light"} ${c}`}>{children}</div>;
export default function Home() {
  return (<><ScrollBar /><TiltInit /><Nav /><main>
    <T t="ivory"><Hero /></T><T t="sand"><Proof /></T><T t="ivory"><Problem /></T><T t="sand"><Journey3D /></T><T t="ivory"><Split /></T>
    <T t="sand"><Services /></T><T t="ivory"><Bento /></T><T t="sand"><Demo /></T><T t="ivory"><Compare /></T>
    <T t="sand"><Benefits /></T><T t="ivory"><Partners /></T><T t="sand"><Reach /></T><T t="ivory"><BlogTeaser /></T><T t="sand"><Faq /></T>
    <CtaBanner /><T t="ivory"><Contact /></T>
  </main><Footer /></>);
}
