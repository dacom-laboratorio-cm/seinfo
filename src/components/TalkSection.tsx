import Image from 'next/image';
import styles from './TalksSection.module.css';
import foto5 from '/public/images/foto5.png'; // Imagem de exemplo

const TalksSection = () => {
  return (
    <section id="palestras" className={styles.talksSection}>
      <h2 className={styles.title}>Palestras e Minicursos</h2>
      <div className={styles.cardsContainer}>
        {/* Exemplo de card */}
        <div className={styles.talkCard}>
          <Image src={foto5} alt="Palestra sobre Mercado de Trabalho" layout="fill" objectFit="cover" className={styles.cardBackground} />
          <div className={styles.cardContent}>
            <h3>Desafios do Mercado de Trabalho</h3>
            <p>05/08 - 19:30</p>
          </div>
        </div>
        {/* Adicione mais cards aqui */}
      </div>
    </section>
  );
};

export default TalksSection;