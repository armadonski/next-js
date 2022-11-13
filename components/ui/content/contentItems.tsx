import NavButton from "../navButton";
import styles from "../../../styles/ContentItems.module.css";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

export default function ContentItems(props) {
  const [itemList, setItemList] = useState(
    props.items[Object.keys(props.items)[0]]
  );

  const [activeButton, setActiveButton] = useState(0);

  const getItemListHandler = (key) => {
    const items = props.items[Object.keys(props.items)[key]];

    setActiveButton(key);
    setItemList(items);
  };

  return (
    <div className={styles.list}>
      <div className={styles.navList}>
        {Object.keys(props.items).map((item, key) => (
          <div className={styles.listButtons} key={key}>
            <NavButton
              active={activeButton === key}
              goTo={() => getItemListHandler(key)}
              key={key}
            >
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
                    <div>
                      {item.title} - {item.date}
                    </div>
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
