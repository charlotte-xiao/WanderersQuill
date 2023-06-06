import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Embracing the Journey',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Life's true beauty lies not only in the destination but also in the journey; embrace the challenges, savor the
        moments, and let your path unfold with joy.
      </>
    ),
  },
  {
    title: 'Unleash Your Potential',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Within you lies immense untapped potential; believe in yourself, break free from limitations, and unleash your
        unique gifts to create a world of infinite possibilities.
      </>
    ),
  },
  {
    title: 'Find Strength in Resilience',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Adversity may test your strength, but it is through resilience that you discover your true power; rise,
        persevere, and let your resilience shape a remarkable story of triumph.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
