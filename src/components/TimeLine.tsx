import styles from './DatesTimeline.module.css';

const timelineData = [
  { date: '01/08', title: 'Abertura do Evento', description: 'Palestras e mesa-redonda.' },
  { date: '02/08', title: 'Minicurso', description: 'Introdução ao Linux.' },
  { date: '03/08', title: 'Coffee Break & Palestras', description: 'Networking e aprendizado.' },
  { date: '04/08', title: 'Computação Forense', description: 'Palestra com especialista.' },
  { date: '05/08', title: 'Encerramento', description: 'Premiações e despedida.' },
];

const DatesTimeline = () => {
  return (
    <section id="datas" className={styles.datesSection}>
      <h2 className={styles.title}>Datas</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelinePoint}></div>
            <div className={styles.timelineContent}>
              <span className={styles.date}>{item.date}</span>
              <h3 className={styles.eventTitle}>{item.title}</h3>
              <p className={styles.eventDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DatesTimeline;