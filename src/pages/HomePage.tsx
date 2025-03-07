import Hero from "../components/Hero";
import ProjectStatsSection from "../components/ProjectStatsSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import ClientsFeedbackSection from "../components/ClientsFeedbackSection";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <ProjectStatsSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientsFeedbackSection />
    </div>
  );
};

export default HomePage;
