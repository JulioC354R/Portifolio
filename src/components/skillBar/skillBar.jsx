import styles from "./skillBar.module.css";

export default function SkillBar({ skillName, proefiencyLevel }) {
  return (
    <div className={styles.skill}>
      <span>{skillName}</span>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} style={{ width: `${proefiencyLevel}%` }}></div>
      </div>
    </div>
  );
}
