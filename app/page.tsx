'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import CurrentlyWorkingOn from '@/components/CurrentlyWorkingOn';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const PageLoader = dynamic(() => import('@/components/PageLoader'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false });

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <CurrentlyWorkingOn />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
