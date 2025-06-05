import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
import { FullScreen } from "@/components/full-screen";
import LandingPage from "@/components/landing-page";
import ProjectPage from "@/components/project";
import WorkPage from "@/components/work";

export default function Home() {
  return (
    <>
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <LandingPage />
      </FullScreen>

      <ProjectPage />

      <WorkPage />

      <ContactPage />

      <Footer />
    </>
  );
}
