import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import ImageCollage from "@/components/ImageCollage";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.heroSection}>
          <HeroContent />
          {/*<ImageCollage /> */}
        </div>
       
        <Footer/>
      </main>
    </>
  );
}