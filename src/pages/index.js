import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
    title: 'Super fast and reliable',
    imageUrl: 'img/fast_reliable_blue.svg',
    description: (
      <>
        mhost is very fast and uses multiple DNS servers concurrently and aggregates all results for more reliable lookups.
      </>
    ),
  },
  {
    title: 'Classic and modern',
    imageUrl: 'img/classic_modern_blue.svg',
    description: (
      <>
        mhost supports classic DNS over UDP and TCP as well as modern DNS over TLS (DoT) and HTTP (DoH).
      </>
    ),
  },
  {
    title: 'Human and machine friendly',
    imageUrl: 'img/human_machine_friendly_blue.svg',
    description: (
      <>
        mhost presents results in an easy, human readable format or as JSON for post-processing.
      </>
    ),
  },
  {
    title: 'Discover hosts and subdomains',
    imageUrl: 'img/discover_blue.svg',
    description: (
      <>
        mhost discovers host names and subdomains of any domain as well as IP subnets in CIDR notation.
      </>
    ),
  },
  {
    title: 'Lint your domain server configuration',
    imageUrl: 'img/lint_blue.svg',
    description: (
      <>
        mhost uses lints to validate the DNS configurations of any domain.
      </>
    ),
  },
  {
    title: 'API',
    imageUrl: 'img/api_blue.svg',
    description: (
      <>
        mhost offers an easy to use Rust library so you can use the same lookup capabilities in your own project.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`A modern DNS lookup, discover, and lint utility`}
      description="mhost - a modern take on the classic host DNS lookup utility including an easy to use and very fast Rust library">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/installation')}>
              Get Started
            </Link>
            &nbsp;
            &nbsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/usage_examples')}>
              Examples
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="text--center">
            <br/>
            <a href="https://asciinema.org/a/s4EVrGQ9V1rifpCZLG0c1Xa3B" target="_blank"><img className={styles.indexAsciinema} src="img/index_example.png"/></a>
          </div>
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
