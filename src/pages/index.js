import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const features = [
  {
    title: 'Parallel multi-server queries',
    imageUrl: 'img/fast_reliable_blue.svg',
    description: (
      <>
        Query 84 built-in public resolvers in parallel and aggregate all results. More servers means more confidence you're seeing the full picture.
      </>
    ),
  },
  {
    title: 'All four protocols',
    imageUrl: 'img/classic_modern_blue.svg',
    description: (
      <>
        DNS over UDP, TCP, TLS (DoT), and HTTPS (DoH). Ships with 84 configurations across Cloudflare, Google, Quad9, Mullvad, Wikimedia, and DNS4EU.
      </>
    ),
  },
  {
    title: 'Discover subdomains',
    imageUrl: 'img/discover_blue.svg',
    description: (
      <>
        10+ discovery strategies: Certificate Transparency logs, wordlists, AXFR, NSEC walking, SRV probing, TXT mining, permutation, recursive depth, and more.
      </>
    ),
  },
  {
    title: 'Validate DNS configuration',
    imageUrl: 'img/lint_blue.svg',
    description: (
      <>
        13 lints check SOA, NS delegation, MX, SPF, DMARC, CAA, DNSSEC, HTTPS/SVCB, TTL consistency, zone transfer exposure, and delegation consistency.
      </>
    ),
  },
  {
    title: 'Propagation, diff, verify, trace',
    imageUrl: 'img/human_machine_friendly_blue.svg',
    description: (
      <>
        Check propagation across public resolvers. Diff records between nameservers or JSON snapshots. Verify live DNS against BIND zone files. Trace the full delegation chain.
      </>
    ),
  },
  {
    title: 'Interactive TUI + Rust library',
    imageUrl: 'img/api_blue.svg',
    description: (
      <>
        <code>mdive</code> is an interactive terminal UI for exploring DNS with drill-down navigation and real-time discovery. Plus an async Rust library for your own projects.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, index}) {
  const delayClass = styles[`featureDelay${index}`];
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={clsx(styles.featureCard, delayClass)}>
        {imageUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imageUrl} alt={title} />
          </div>
        )}
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="DNS lookup, discovery, linting, and more"
      description="mhost - a modern, high-performance DNS Swiss Army knife and Rust library. Parallel multi-server queries, subdomain discovery, DNS linting, propagation checking, zone file verification, and an interactive TUI.">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--lg',
                styles.ctaPrimary,
              )}
              to="/docs/installation">
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.ctaSecondary,
              )}
              to="/docs/usage_examples">
              Examples
            </Link>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.ctaSecondary,
              )}
              to="https://github.com/lukaspustina/mhost">
              GitHub
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className={styles.terminalFrame}>
            <div className={styles.terminalBar}>
              <span className={styles.terminalDotRed} />
              <span className={styles.terminalDotYellow} />
              <span className={styles.terminalDotGreen} />
              <span className={styles.terminalTitle}>mhost -- github.com</span>
            </div>
            <div className={styles.terminalBody}>
              <img src="img/multi-lookup-all-records-github.png" alt="mhost looking up all record types for github.com"/>
            </div>
          </div>
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} index={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
