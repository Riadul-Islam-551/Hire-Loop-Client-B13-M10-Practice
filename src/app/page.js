import HeroSection from "@/components/home/HeroSection";
import HomeFeaturedPrice from "@/components/home/HomeFeaturedPrice";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeJobSection from "@/components/home/HomeJobSection";
import HomeSplitAction from "@/components/home/HomeSplitAction";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection></HeroSection>
      <HomeJobSection></HomeJobSection>
      <HomeFeatures></HomeFeatures>
      <HomeFeaturedPrice></HomeFeaturedPrice>
      <HomeSplitAction></HomeSplitAction>
    </div>
  );
}
