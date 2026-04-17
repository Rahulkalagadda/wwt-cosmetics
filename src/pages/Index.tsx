import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { HeroMarquee } from "@/components/site/HeroMarquee";
import { Categories } from "@/components/site/Categories";
import { Bestsellers } from "@/components/site/Bestsellers";
import { BrandStory } from "@/components/site/BrandStory";
import { Showcase } from "@/components/site/Showcase";
import { SocialReels } from "@/components/site/SocialReels";
import { ProductLines } from "@/components/site/ProductLines";
import { Testimonials } from "@/components/site/Testimonials";
import { TrustBar } from "@/components/site/TrustBar";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/20">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <HeroMarquee />
      <Categories />
      <Bestsellers />
      <BrandStory />
      <Showcase />
      <SocialReels />
      <ProductLines />
      <Testimonials />
      <TrustBar />
      <Footer />
    </main>
  );
};

export default Index;
