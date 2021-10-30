import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Demo from "../components/Demo";
import clsx from "clsx";

import LogoSvg from "../../static/img/logo.svg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero__primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.indexContentWrapper}>
          <div className={styles.logoWrapper}>
            <LogoSvg />
          </div>
          <div className={styles.titleContainer}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx("button", styles.btnQuickStart)}
                to="/docs/get_started"
              >
                Quick Start Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Validations Framework`}
      description="Vest is a validations framework inspired by the syntax and style of testing libraries."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Demo />
      </main>
    </Layout>
  );
}
