import FeaturedProducts from "../components/FeaturedProducts";
import GlobeBanner from "../components/GlobeBanner";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks";
import TrustedBy from "../components/TrustedBy";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <WhyChooseUs />
      <GlobeBanner />
      <FeaturedProducts />
    </main>
  );
};

export default Home;
