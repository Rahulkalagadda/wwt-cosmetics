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
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { MobileNav } from "@/components/site/MobileNav";
import { PWAInstallPrompt } from "@/components/site/PWAInstallPrompt";

const Index = () => {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 pb-20 lg:pb-0">
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
      <WhatsAppButton />
      <MobileNav />
      <PWAInstallPrompt />
    </main>
  );
};

export default Index;
