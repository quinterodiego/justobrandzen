import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
    </div>
  );
}
