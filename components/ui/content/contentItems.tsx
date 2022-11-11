import NavButton from "../navButton";
import styles from "../../../styles/ContentItems.module.css";
import { useEffect, useState } from "react";

export default function ContentItems(props) {
  const [itemList, setItemList] = useState(
    props.items[Object.keys(props.items)[0]]
  );

  useEffect(() => {
    console.log(itemList);
  }, []);

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
        <ul>
          {itemList.length
            ? itemList.map((item, key) => {
                const bullets = item.bullets.map((bullet, key) => {
                  return <li key={key}>{bullet}</li>;
                });

                return (
                  <div key={key}>
                    {item.title} - {item.date}
                    {bullets}
                  </div>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
