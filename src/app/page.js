import HeroSection from "@/components/HeroSection";
import HomeFeaturedPrice from "@/components/HomeFeaturedPrice";
import HomeFeatures from "@/components/HomeFeatures";
import HomeJobSection from "@/components/HomeJobSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection></HeroSection>
      <HomeJobSection></HomeJobSection>
      <HomeFeatures></HomeFeatures>
      <HomeFeaturedPrice></HomeFeaturedPrice>
    </div>
  );
}
