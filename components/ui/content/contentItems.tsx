import NavButton from "../navButton";
import styles from "../../../styles/ContentItems.module.css";
import { useState } from "react";

export default function ContentItems(props) {
  const [itemList, setItemList] = useState(
    props.items.list[Object.keys(props.items.list)[0]]
  );

  const [activeButton, setActiveButton] = useState(0);

  const getItemListHandler = (key) => {
    const items = props.items.list[Object.keys(props.items.list)[key]];

    setActiveButton(key);
    setItemList(items);
  };

  return (
    <div className={styles.list}>
      <div className={styles.navList}>
        {Object.keys(props.items.list).map((item, key) =>
          props.items.nav ? (
            <div className={styles.listButtons} key={key}>
              <NavButton
                active={activeButton === key}
                goTo={() => getItemListHandler(key)}
                key={key}
              >
                {item}
              </NavButton>
            </div>
          ) : (
            <div key={key}>{item}</div>
          )
        )}
      </div>
      <div className={styles.bullets}>
        {itemList.length
          ? itemList.map((item, key) => {
              const bullets = item.bullets.map((bullet, key) => {
                return <li key={key}>{bullet}</li>;
              });

              return (
                <div key={key}>
                  {item.title ? (
                    <h4 className={styles.title}>{item.title}</h4>
                  ) : null}
                  {item.date ? (
                    <h5 className={styles.date}>{item.date}</h5>
                  ) : null}
                  {bullets ? (
                    <ul className={styles.listStyle}>{bullets}</ul>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
