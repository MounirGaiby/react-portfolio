import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json"; // Assuming this remains unchanged
import history from "../../data/history.json"; // Now contains the education JSON
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* Remove image if no imageSrc is provided; add back if you update JSON */}
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.institution} Logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.programme}, ${historyItem.institution}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.details.map((detail, id) => {
                      return <li key={id}>{detail}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};