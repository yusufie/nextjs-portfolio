
import './globals.css'

import Link from 'next/link';

function Home() {
  return (

    <div className="glass-morphism">
      <div className="btn" id="btnHome">
        <Link href="/">Home</Link>
      </div>

      <div className="btn" id="btnProjects">
        <Link href="/projects">Projects</Link>
      </div>

      <div className="btn" id="btnSkills">
        <Link href="/skills">Skills</Link>
      </div>

      <div className="btn" id="btnAbout">
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default Home