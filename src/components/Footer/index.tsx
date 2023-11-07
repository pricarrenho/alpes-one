import styles from "./styles.module.scss";
import Logo from "../../assets/img/logo-alpes.png";

export function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a elementum
        orci, vitae commodo nibh. In vitae convallis nisl. Morbi rhoncus mattis
        purus sed commodo. Integer rhoncus ex risus. Proin efficitur elit nunc,
        ut pulvinar massa egestas in. Fusce quis quam viverra, pretium quam ac,
        consectetur lectus.
      </p>

      <div className={styles.divider}></div>

      <p className={styles.paragraph}>
        © Copyright © 2021 Lorem ipsum dolor sit amet.
      </p>

      <p className={styles.madeFor}>
        Feito por: <img src={Logo} alt="" />
      </p>
    </div>
  );
}
