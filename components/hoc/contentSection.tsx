import styles from "../../styles/ContentSection.module.css";

export default function ContentSection(props: { children: any }) {
  return (
    <section className={styles.bgContainer}>
      <div className={`${styles.content} ${styles.bgDarkBlue}`}>
        {props.children}
      </div>
    </section>
  );
}
