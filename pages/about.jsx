import styles from "@styles/About.module.scss";

export default function About() {
  return (
    <section className={styles.About}>
      <div className={styles.AboutInner}>
        <div className={styles.Header}>
          <h1>
            We&apos;ll Optimize Your Customer Journey. You&apos;ll Close More
            Business.
          </h1>
          <button className='btn-primary'>Let&apos;s Get Started</button>
        </div>
        <div className={styles.Roadmap}>
          <h2>Pave a Better Path to Purchase</h2>
          <div className={styles.RoadmapCardWrapper}>
            <div className={styles.RoadmapCard}></div>
            <div className={styles.RoadmapCard}></div>
            <div className={styles.RoadmapCard}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
