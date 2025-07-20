import styles from '@/app/page.module.css';

const HeroContent = () => {
  return (
    <div className={styles.heroContent}>
      <p className={styles.editionTag}>9ª Edição</p>
      <h1 className={styles.brandLogo}>
        SEINFO <span className={styles.year}>2025</span>
      </h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet. Qui quas internos et provident incidunt est eligendi quae ut iusto nobis. Ea dolore dolorem eos consequatur voluptas in eaque quisquam et dolor molestias ut nesciunt eius ut consequatur dolorem. Et ducimus illum sed animi voluptas et doloremque magni.
      </p>
      <a href="#saiba-mais" className={styles.ctaButton}>
        Saiba mais!
      </a>
    </div>
  );
};

export default HeroContent;