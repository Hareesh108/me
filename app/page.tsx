import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
import LandingPage from "@/components/landing-page";
import ProjectPage from "@/components/project";
import Tech from "@/components/tech";

export default function Home() {
  return (
    <>
      <LandingPage key="landing-page" />

      <ProjectPage />

      <Tech />

      <ContactPage />

      <Footer />
    </>
  );
}
