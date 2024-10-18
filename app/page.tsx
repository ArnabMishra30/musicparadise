import CommentCard from "@/components/CommentCard";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyUs />
      <CommentCard />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
