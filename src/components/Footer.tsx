'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

function formatTime() {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Europe/Rome',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime());
    const id = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerMain}>
          <h2>Have a project to put online?</h2>
          <a className={styles.mailLink} href="mailto:info@nicolorancan.com">
            info@nicolorancan.com
          </a>
          <div className={styles.footerSocials}>
            <a href="https://github.com/nicolo-rancan" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicol%C3%B2-rancan-055231208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.footerMeta}>
          <span>Chiampo, VI · Italy{time ? ` — ${time} local time` : ''}</span>
          <span>© {year} Nicolò Rancan</span>
        </div>
      </div>
    </footer>
  );
}
