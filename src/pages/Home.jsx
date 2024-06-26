import { Analytics } from "@vercel/analytics/react"
import Introduction from "../components/Home/Introduction";
import AboutMe from "../components/Home/AboutMe";
import FamiliarTech from "../components/Home/FamiliarTech";
import ThingsIEnjoy from "../components/Home/ThingsIEnjoy";
import ImAAnimation from "../components/Home/ImAAnimation";
import FadeInAnimation from "../components/FadeInAnimation";

function Home() {
  return (
    <div className="py-4 px-2 sm:px-8 font-sans">
      <Analytics />

      <FadeInAnimation>
        <div className="">
          <Introduction />
          <ImAAnimation />
          <div className="h-8" />
          <AboutMe />
          <div className="h-28" />
        </div>
        <FamiliarTech />
        <div className="h-24" />
        <ThingsIEnjoy />
      </FadeInAnimation>

    </div>
  );
}

export default Home;
