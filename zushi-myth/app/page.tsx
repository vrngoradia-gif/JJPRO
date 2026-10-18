import Nav from "@/components/Nav"; import Hero from "@/components/Hero"; import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks"; import Partners from "@/components/Partners"; import Services from "@/components/Services";
import Demo from "@/components/Demo"; import Benefits from "@/components/Benefits"; import Proof from "@/components/Proof";
import Reach from "@/components/Reach"; import BlogTeaser from "@/components/BlogTeaser"; import Faq from "@/components/Faq";
import Contact from "@/components/Contact"; import Footer from "@/components/Footer";
import Split from "@/components/Split"; import Bento from "@/components/Bento"; import Compare from "@/components/Compare";
import CtaBanner from "@/components/CtaBanner"; import Gallery from "@/components/Gallery"; import ScrollBar from "@/components/ScrollBar";
const T = ({ t, children, c = "" }: { t: "ink" | "navy" | "ivory" | "sand"; children: React.ReactNode; c?: string }) => <div className={`tone tone-${t} ${t === "ink" || t === "navy" ? "tone-dark" : "tone-light"} ${c}`}>{children}</div>;
export default function Home() {
  return (<><ScrollBar /><Nav /><main>
    <T t="ink" c="tone-hero"><Hero /></T><T t="navy"><Problem /></T><T t="ivory"><HowItWorks /></T><T t="sand"><Split /></T>
    <T t="navy"><Services /></T><T t="ivory"><Bento /></T><T t="sand"><Partners /></T><T t="ink"><Demo /></T>
    <T t="navy"><Compare /></T><T t="ivory"><Benefits /></T><T t="sand"><Gallery /></T><T t="ivory"><Proof /></T>
    <CtaBanner /><T t="ink"><Reach /></T><T t="ivory"><BlogTeaser /></T><T t="sand"><Faq /></T><T t="ink"><Contact /></T>
  </main><Footer /></>);
}
