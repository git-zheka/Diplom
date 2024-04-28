import Footer from "@/app/components/footer/Footer";
import AboutUs from "./aboutUs/AboutUs";
import Header from "./header/Header";
import StudySection from "./study/components/StudySection";


export default function HomePage() {
  return (
    <div>
        <Header />
        <StudySection />
        <AboutUs />
    </div>
  );
}
