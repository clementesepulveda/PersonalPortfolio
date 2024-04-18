import { Analytics } from "@vercel/analytics/react"
// import Introduction from "../components/Home/Introduction"
import Introduction from "../components/Home/Introduction";
import AboutMe from "../components/Home/AboutMe";

function Home() {
  return (
    <div className="py-4 px-4 sm:px-8 font-sans">
      <Analytics />

      <Introduction />
      <AboutMe />

    </div>
  );
}

export default Home;
