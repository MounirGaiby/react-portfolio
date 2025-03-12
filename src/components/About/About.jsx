import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Fatima Ezzahra Baamar travaillant sur un ordinateur portable"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Icône de curseur" />
            <div className={styles.aboutItemText}>
              <h3>Développeuse Frontend</h3>
              <p>
                Expérience en développement d'interfaces modernes et responsives
                avec HTML, CSS, JavaScript, et React.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Icône de serveur" />
            <div className={styles.aboutItemText}>
              <h3>Développeuse Backend</h3>
              <p>
                Conception et développement d'APIs performantes en PHP et Python,
                avec une maîtrise des bases de données MySQL, MongoDB et PostgreSQL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Icône de conception" />
            <div className={styles.aboutItemText}>
              <h3>Gestion de projet et outils collaboratifs</h3>
              <p>
                Expérience avec Git, GitHub, GitLab et méthodologies Agile (Scrum, Jira)
                pour un développement efficace en équipe.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
