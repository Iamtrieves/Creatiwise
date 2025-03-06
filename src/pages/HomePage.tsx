import Hero from "../components/Hero";
import ProjectStatsSection from "../components/ProjectStatsSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProjectStatsSection />
      <ServicesSection />
      <PortfolioSection />
    </div>
  );
};

export default HomePage;
