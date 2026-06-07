import HeroSection from "@/components/HeroSection";
import HomeJobSection from "@/components/HomeJobSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection></HeroSection>
      <HomeJobSection></HomeJobSection>
    </div>
  );
}
