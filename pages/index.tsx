import type { NextPage } from "next";
import Head from "next/head";
import ContentSection from "../components/hoc/contentSection";
import Navbar from "../components/ui/nav/navbar";
import VerticalNav from "../components/ui/nav/verticalNav";
import styles from "../styles/Home.module.css";
import sections from "../content/content.json";
import whoami from "../content/whoami.json";
import WhoAmI from "../components/ui/nav/whoami";
import Content from "../components/ui/content/content";
import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

const Home: NextPage = () => {
  const sectionTitles = Object.keys(sections);
  const parallax = useRef<IParallax>(null!);

  const goToHandler = (key) => {
    parallax.current.scrollTo(key + 1);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Armando Gavrila</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <Navbar buttons={sectionTitles} goTo={goToHandler} />
        </nav>
      </header>
      <main>
        <div className={styles.content}>
          <div className={styles.verticalNav}>
            <VerticalNav />
            <div className={styles.verticalLine}></div>
          </div>
          <div className={styles.contentSections}>
            <Parallax ref={parallax} pages={sectionTitles.length + 1}>
              <ParallaxLayer offset={0} speed={1} key={0}>
                <ContentSection>
                  <Content number="0" title="Who Am I?">
                    <WhoAmI content={whoami} />
                    <ParallaxLayer
                      offset={1.3}
                      speed={-0.3}
                      style={{ pointerEvents: "none" }}
                    ></ParallaxLayer>
                  </Content>
                </ContentSection>
              </ParallaxLayer>
              {sectionTitles.map((section, key) => (
                <ParallaxLayer offset={key + 1} key={key + 1} speed={1}>
                  <ContentSection key={key}>
                    <Content
                      number={key + 1}
                      title={sections[section].title}
                      items={sections[section].items}
                    >
                      {sections[section].description}
                    </Content>
                  </ContentSection>
                </ParallaxLayer>
              ))}
            </Parallax>
          </div>
        </div>
        <footer>
          <div className={styles.footer}>footer footer footer</div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
