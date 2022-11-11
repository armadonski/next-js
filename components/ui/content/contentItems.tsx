import NavButton from "../navButton";
import styles from "../../../styles/ContentItems.module.css";
import { useEffect, useState } from "react";

export default function ContentItems(props) {
  const [itemList, setItemList] = useState(
    props.items[Object.keys(props.items)[0]]
  );

  useEffect(() => {}, []);

  const getItemListHandler = (key) => {
    const items = props.items[Object.keys(props.items)[key]];

    setItemList(items);
  };

  return (
    <div className={styles.list}>
      <div className={styles.navList}>
        {Object.keys(props.items).map((item, key) => (
          <div className={styles.listItem} key={key}>
            <NavButton goTo={() => getItemListHandler(key)} key={key}>
              {item}
            </NavButton>
          </div>
        ))}
      </div>
      <div className={styles.bullets}>
        <div>{itemList.title} - {itemList.date}</div>
        <div className={styles.navList}>
          <ul>
            {itemList.bullets
              ? itemList.bullets.map((item, key) => {
                  return <li key={key}>{item}</li>;
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}
