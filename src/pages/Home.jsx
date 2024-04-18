import { Analytics } from "@vercel/analytics/react"
import Introduction from "../components/Home/Introduction";
import AboutMe from "../components/Home/AboutMe";
import FamiliarTech from "../components/Home/FamiliarTech";
import ThingsIEnjoy from "../components/Home/ThingsIEnjoy";
import ImAAnimation from "../components/Home/ImAAnimation";

function Home() {
  return (
    <div className="py-4 px-4 sm:px-8 font-sans">
      <Analytics />

      <div className="min-h-3.5">
        <Introduction />
        <ImAAnimation />
        <div className="h-8" />
        <AboutMe />
        <div className="h-48" />
      </div>
      <FamiliarTech />
      <div className="h-24" />
      <ThingsIEnjoy />

    </div>
  );
}

export default Home;
