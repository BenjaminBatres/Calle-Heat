import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import MenuSection from "./components/sections/MenuSection";
import ScheduleSection from "./components/sections/ScheduleSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScheduleSection />
      <MenuSection />
      <AboutSection />
    </>
  );
}
