import './globals.css'
// import ParticleBackground from "./ParticleBackground";

import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
});

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio - Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

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

        <div className="backgroundImage"></div>
        {/* <ParticleBackground /> */}
        <DynamicParticleBackground />
      </body>
    </html>
  );
}
