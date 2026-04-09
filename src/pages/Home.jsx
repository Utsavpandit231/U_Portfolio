import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden realative z-10">
      
      <ThemeToggle/>
      <StarBackground/>
      <Navbar/>

      <main>
      <HeroSection/>
      <AboutMeSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
      </main>

      <Footer/>



      

    </div>
  )
}

export default Home;
