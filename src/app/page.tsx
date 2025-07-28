import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import ImageCollage from "@/components/ImageCollage";
import Inscriptions from "@/components/Inscriptions";
import DatesTimeline from "@/components/TimeLine";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.heroSection}>
          <HeroContent />
          <ImageCollage />
        </div>
        <div className="">
          <DatesTimeline />
        </div>

        <Inscriptions />
        <Footer />
      </main>
    </>
  );
}
