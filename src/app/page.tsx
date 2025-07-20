import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import ImageCollage from "@/components/ImageCollage";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.heroSection}>
        <HeroContent />
        <ImageCollage />
      </main>
    </>
  );
}