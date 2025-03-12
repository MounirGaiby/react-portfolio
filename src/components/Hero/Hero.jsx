import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = [
    "Développeuse Full Stack",
    "Conceptrice Web",
    "Codeuse Créative",
    "Passionnée de Technologie",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const delayBetweenRoles = 1500;

    const type = () => {
      const currentRole = roles[roleIndex];
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenRoles);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Bonjour, Je suis
          <span className={styles.name}>
            <span className={styles.firstName}>Fatima Ezzahra</span>
            <span className={styles.lastName}>Baamar</span>
          </span>
        </h1>
        <p className={styles.typedText}>{typedText}</p>
        <p className={styles.description}>
          Étudiante en Développement Digital, option Web Full-Stack à l'ISFO
          Casablanca. Je recherche un stage d'un mois à partir d'avril 2025.
          Passionnée par les nouvelles technologies, j'ai acquis des
          compétences solides en front-end et back-end.
        </p>
        <div className={styles.buttonsContainer}>
          <a
            href="mailto:baamarfatimaezzahra@gmail.com"
            className={styles.contactBtn}
          >
            Contacter Moi
          </a>
          <a
            href="/heroResume.pdf"
            className={styles.contactBtn}
            target="_blank"
            rel="noreferrer"
          >
            Mon CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Fatima Ezzahra Baamar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
