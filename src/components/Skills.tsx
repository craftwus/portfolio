import styles from './Skills.module.css';

const groups: { label: string; items: string[] }[] = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'REST API'],
  },
  {
    label: 'Infra & deploy',
    items: ['Docker', 'nginx', 'Bare-metal & server hardware', 'Let’s Encrypt / SSL', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className="container">
        <p className="eyebrow">Stack</p>
        <h2 data-reveal>From a React component to the SSL certificate.</h2>
        <p className={styles.skillsNote}>
          I don&apos;t stop at application code: I design the database, write the API,
          containerize it, and configure the server that runs it in production.
        </p>

        <div className={styles.groups}>
          {groups.map((g, i) => (
            <div className={styles.group} data-reveal key={g.label} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className={styles.groupLabel}>{g.label}</span>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
