import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <nav className={styles.topbar}>
          <span className={styles.mark}>
            nr<span className={styles.markDot}>.</span>
          </span>
          <div className={styles.topbarRight}>
            <span className={styles.status}>
              <span className="dot" />
              available for new projects
            </span>
            <div className={styles.socials}>
              <a
                href="https://github.com/nicolo-rancan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nicol%C3%B2-rancan-055231208/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <div className={styles.heroBody}>
          <p className={`eyebrow ${styles.eyebrow}`}>Full-stack developer — Chiampo, VI, Italy</p>
          <h1>
            I build software<br />
            and then <span className={styles.accent}>keep it running</span>.
          </h1>
          <p className={styles.lede}>
            I&apos;m Nicolò Rancan. I design, write, and ship complete web
            applications — database to the server that runs them, included.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.btn} href="#work">
              See what I&apos;ve built
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="mailto:info@nicolorancan.com">
              info@nicolorancan.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
