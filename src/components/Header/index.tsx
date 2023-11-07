import styles from "./styles.module.scss";

import { Logo } from "../../assets/svg/Logo";
import { Phone } from "../../assets/svg/Phone";

export function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.phone}>
        <Phone size={19} color="#666666" />
        <p>(21) 2042-4442</p>
      </div>

      <div>
        <p>
          <Logo size={35} />
        </p>
      </div>
    </div>
  );
}
