import { Featured } from '../Featured/Featured';
import { HeroSection } from '../HeroSection/HeroSection';
import { HowItWorks } from '../HowItWorks/HowItWorks';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <HowItWorks />
    </>
  );
};
