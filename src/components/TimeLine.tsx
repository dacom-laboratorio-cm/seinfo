import styles from "@/styles/timeline.module.css";

const timelineData = [
  { date: "25/08", title: "Abertura do Evento", description: "Confraternização" },
  { date: "25/08", title: "Palestras & Minicursoss", description: "Ministrados por professores e alunos" },
  { date: "26/08", title: "Palestras, Minicursos & Atividades", description: "Ministrados por professores e alunos" },
  { date: "27/08", title: "Palestras, Minicursos & Atividades", description: "Ministrados por professores e alunos" },
  { date: "28/08", title: "Palestras, Atividades, Minicursos & Rodas de Conversa", description: "Ministrados por professores e alunos" },
  { date: "29/08", title: "Minicursos & Atividades", description: "Ministrados por alunos" },
  { date: "29/08", title: "Encerramento do Evento", description: "" },
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
