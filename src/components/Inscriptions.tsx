import styles from '@/styles/inscriptions.module.css';

const Inscriptions = () => {
  return (
    <div id="inscricoes" className={styles.Inscriptions}>
        <h2>
            Inscrições 
        </h2>

        <div className={styles.InscriptionsText}>
            <p>
                Garanta sua vaga de forma rápida e descomplicada com a Even3. <br/>
                Cadastre-se em poucos cliques e tenha acesso imediato à SEINFO! 
                Depois da inscrição, é só comparecer e aproveitar o evento ao máximo!
            </p>
        </div>

        {/* COLOCAR O LINK DO even3 AQUI */}
        <a
            href=""
            className={styles.InscriptionsButton}
            >
            Inscrever-se
        </a>


         <div className={styles.InscriptionsSubText}>
            <p>
                OBS.: Os certificados de participação serão enviados no E-mail utilizado no cadastro
            </p>
        </div>
    </div>
  );
};

export default Inscriptions;