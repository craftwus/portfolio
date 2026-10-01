import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.aboutInner}`}>
        <p className="eyebrow">About</p>
        <p className={styles.aboutText} data-reveal>
          I&apos;m <strong>Nicolò Rancan</strong>, based in Chiampo, in the province of
          Vicenza, Italy. I&apos;m a full-stack developer: I handle an application&apos;s
          entire lifecycle, from the first line of code to the server that keeps
          it online — nginx, SSL certificates, and containers included. I work
          fluently in both Italian and English. What I care about most is
          building tools that solve a real problem for someone, not portfolio
          filler.
        </p>
      </div>
    </section>
  );
}
