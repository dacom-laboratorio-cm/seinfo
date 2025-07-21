import styles from '@/app/page.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
        <h2>
            Realização 
        </h2>
        
        <div className={styles.FooterImages}>
             <img src="/images/logos.png" alt="Logos" />
        </div>

        <div className={styles.FooterCopyright}>
            <p>©SEINFO 2025- Todos os direitos reservados</p>
        </div>
    </footer>
  );
};

export default Footer;