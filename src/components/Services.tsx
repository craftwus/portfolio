import styles from './Services.module.css';

interface Service {
  name: string;
  domain: string;
  status: 'online' | 'private';
  summary: string;
  detail: string;
  stack: string[];
  href?: string;
}

const services: Service[] = [
  {
    name: 'Durlo Rocks',
    domain: 'durlorocks.nicolorancan.com',
    status: 'private',
    summary: 'Presale management for an annual event',
    detail:
      'Private platform for ticket presales for a party that happens every year: user accounts, tickets emailed automatically with a QR code, and scanning at the door on the day of the event.',
    stack: ['Next.js', 'PostgreSQL', 'Email + QR', 'Docker'],
  },
  {
    name: 'durlo.info',
    domain: 'durlo.info',
    status: 'online',
    href: 'https://www.durlo.info',
    summary: 'Public site for the village of Durlo',
    detail:
      'Durlo is a small village in the Piccole Dolomiti, and the home of the Durlo Rocks event. This is its public-facing informational site — built on the same stack as the ticketing platform, but open to anyone.',
    stack: ['Next.js', 'Docker'],
  },
  {
    name: 'Opp',
    domain: 'opp.nicolorancan.com',
    status: 'private',
    summary: 'One Piece catalog and player, rebuilt from scratch',
    detail:
      'The original streaming site had a clunky UX and an unreliable server. I replaced it: web scraping to rebuild the entire catalog (sagas and episodes) into my own database, progressive downloads to the filesystem, and a player with a completely redesigned interface.',
    stack: ['Next.js', 'Prisma', 'Web scraping', 'Docker'],
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="work">
      <div className="container">
        <p className="eyebrow">Active services — {services.length} in production</p>
        <h2 data-reveal>Not just demos. Things that actually run.</h2>

        <ul className={styles.serviceList}>
          {services.map((s, i) => (
            <li
              className={styles.serviceRow}
              data-reveal
              key={s.name}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={styles.serviceHead}>
                <span className="dot" />
                <span className={styles.serviceName}>{s.name}</span>
                {s.href ? (
                  <a
                    className={styles.serviceDomain}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.domain}
                  </a>
                ) : (
                  <span className={styles.serviceDomain}>{s.domain}</span>
                )}
                <span className={styles.serviceStatus}>{s.status}</span>
              </div>
              <p className={styles.serviceSummary}>{s.summary}</p>
              <p className={styles.serviceDetail}>{s.detail}</p>
              <ul className={styles.stack}>
                {s.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
