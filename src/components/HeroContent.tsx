import styles from '@/app/page.module.css';

const HeroContent = () => {
  return (
    <div className={styles.heroContent}>
      <p className={styles.editionTag}>9ª Edição</p>
      <h1 className={styles.brandLogo}>
        SEINFO <span className={styles.year}>2025</span>
      </h1>
      <p className={styles.description}>
      A SEINFO é uma oportunidade única para quem busca se atualizar, ampliar sua rede de contatos e se aproximar do mercado de trabalho. Todos os conteúdos são pensados para promover o aprendizado prático e o debate de ideias, conectando o ambiente acadêmico com as demandas do mundo real da tecnologia.

Fique por dentro da programação completa, inscreva-se nas atividades e participe dessa imersão no universo da informática.

      </p>
      <a href="https://www.instagram.com/cacic.utfprcm/" className={styles.ctaButton}>
        Saiba mais!
      </a>
    </div>
  );
};

export default HeroContent;