import styles from "../../../styles/Content.module.css";

export default function Content(props) {
  return (
    <div>
      <div className={styles.title}>
        <h1>
          <span className="coloredText">0{props.number}</span>. {props.title}
        </h1>
        <div className={`${styles.horizontalLine} lineColor`}></div>
      </div>
      {props.children}
    </div>
  );
}
