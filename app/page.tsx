import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
import LandingPage from "@/components/landing-page";
import ProjectPage from "@/components/project";
import WorkPage from "@/components/work";

export default function Home() {
  return (
    <>
      <LandingPage />

      <ProjectPage />

      <WorkPage />

      <ContactPage />

      <Footer />
    </>
  );
}
