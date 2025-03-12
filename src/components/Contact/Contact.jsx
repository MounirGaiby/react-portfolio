import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>N'hésitez pas à me contacter !</p>
      </div>
      <ul className={styles.links}>
        {[
          {
            icon: "contact/emailIcon.png",
            label: "Email",
            href: "mailto:baamarfatimaezzahra@gmail.com",
            text: "baamarfatimaezzahra@gmail.com"
          },
          {
            icon: "contact/linkedinIcon.png",
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/fatima-ezzahra-baamar-562578304/",
            text: "linkedin.com/in/fatimaezzahrabaamar"
          }
        ].map((link, index) => (
          <li key={index} className={styles.link}>
            <img src={getImageUrl(link.icon)} alt={`${link.label} icon`} />
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${link.label}`}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
