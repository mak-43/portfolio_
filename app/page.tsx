"use client"
import { PhoneIncoming } from 'lucide-react';
import Nav from "@/app/components/Nav"
import HeroSection from './components/HeroSection';
import Services from './components/Services';
export default function Home() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <Services/>
    </div>
  );
}
