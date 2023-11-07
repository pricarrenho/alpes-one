import styles from "./styles.module.scss";
import mobileBanner from "../../assets/img/mobile-banner.png";

import { Button } from "../Button";

export function Carousel() {
  return (
    <div className={styles.banner}>
      <Button styleType="tertiary">Solicite uma cotação</Button>

      <img src={mobileBanner} />

      <div className={styles.dotWrapper}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}
