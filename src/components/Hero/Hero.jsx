import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bonjour, Je suis Fatima Ezzahra BAAMAR</h1>
        <p className={styles.description}>
          Étudiante en Développement Digital, option Web Full-Stack à l'ISFO Casablanca. 
          Je recherche un stage d'un mois à partir d'avril 2025. Passionnée par les nouvelles 
          technologies, j'ai acquis des compétences solides en front-end et back-end.
        </p>
        <div className={styles.buttonsContainer}>
          <a href="mailto:baamarfatimaezzahra@gmail.com" className={styles.contactBtn}>
            Contacter Moi
          </a>
          <a href="/heroResume.pdf" className={styles.contactBtn} target="_blank" rel="noreferrer">
            Mon CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
