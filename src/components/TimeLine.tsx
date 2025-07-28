import styles from "@/app/page.module.css";

const timelineData = [
  { date: "01/08", title: "Abertura do Evento", description: "Palestras e mais alguma coisa." },
  { date: "02/08", title: "Coffee Break & Palestras", description: "Networking e aprendizado." },
  { date: "03/08", title: "Minicurso", description: "Introdução ao Linux." },
  { date: "04/08", title: "Computação Forense", description: "Palestra com especialista." },
  { date: "05/08", title: "Minicurso", description: "Banco de Dados Avançado" },
  { date: "06/08", title: "Palestra", description: "Desafios no mercado de trabalho" },
  { date: "07/08", title: "Encerramento", description: "Premiações e despedida." },
];

const DatesTimeline = () => {
  return (
    <section className={styles.timelineSection} id="datas">
      <h2 className={styles.title}>Datas</h2>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineLine} />
        {timelineData.map((item, index) => {
          const isTop = index % 2 === 0;
          return (
            <div key={index} className={`${styles.timelineItem} ${isTop ? styles.top : styles.bottom}`}>
              {/* Bolinha azul + Data */}
              <div className={styles.circleContainer}>
                {isTop ? (
                  <>
                    <span className={styles.dateBelow}>{item.date}</span>
                    <div className={styles.outerCircle}>
                      <div className={styles.innerCircle}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <span className={styles.dateAbove}>{item.date}</span>
                    <div className={styles.outerCircle}>
                      <div className={styles.innerCircle}></div>
                    </div>
                  </>
                )}
              </div>

              {/* Conteúdo acima ou abaixo */}
              <div className={styles.content}>
                {isTop ? (
                  <>
                    <p className={styles.description}>{item.description}</p>
                    <h3 className={styles.eventTitle}>{item.title}</h3>
                    <div className={`${styles.connector} ${styles.connectorTop}`}>
                      <div className={styles.connectorDot}></div>
                      <div className={styles.connectorLine}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`${styles.connector} ${styles.connectorBottom}`}>
                      <div className={styles.connectorLine}></div>
                      <div className={styles.connectorDot}></div>
                    </div>
                    <h3 className={styles.eventTitle}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DatesTimeline;
