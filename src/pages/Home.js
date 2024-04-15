import { Analytics } from "@vercel/analytics/react"

function Home() {

  return (
    <div className="App">
      <Analytics />
      
      <u>
        <ul><a href="/boids">Boids</a></ul>
        <ul><a href="/abstract">Fun stuffs</a></ul>
      </u>
    </div>
  );
}

export default Home;
