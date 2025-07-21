import styles from '@/app/page.module.css';

const Inscriptions = () => {
  return (
    <footer className={styles.Inscriptions}>
        <h2>
            Inscrições 
        </h2>

        <div className={styles.InscriptionsText}>
            <p>
                Garanta sua vaga de forma rápida e descomplicada com a Even3. 
                Cadastre-se em poucos cliques e tenha acesso imediato à SEINFO! 
                Depois da inscrição, é só comparecer e aproveitar o evento ao máximo!
            </p>
        </div>

        <div className={styles.InscriptionsButton}>
            <button type="button">Inscrever-se</button>
        </div>

         <div className={styles.InscriptionsSubText}>
            <p>
                OBS.: Os certificados de participação serão enviados no E-mail utilizado no cadastro
            </p>
        </div>
    </footer>
  );
};

export default Inscriptions;