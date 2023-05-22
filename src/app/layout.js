import './globals.css'
// import ParticleBackground from "./ParticleBackground";

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

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

        <Navbar />

        <div className="backgroundImage"></div>
        {/* <ParticleBackground /> */}
        <DynamicParticleBackground />
      </body>
    </html>
  );
}
