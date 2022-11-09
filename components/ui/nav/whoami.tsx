import styles from "../../../styles/WhoAmI.module.css";

export default function WhoAmI(props) {
  const content = props.content;

  return (
    <div className={styles.widget}>
      <h1 className={styles.name}>{content.name}</h1>
      <h1 className={styles.header}>{content.header}</h1>
      <p className={styles.description}>{content.description}</p>
    </div>
  );
}
