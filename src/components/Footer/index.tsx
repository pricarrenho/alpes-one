import styles from "./styles.module.scss";
import LogoAlpes from "../../assets/img/logo-alpes.png";
import { Container } from "../Container";
import { Logo } from "../../assets/svg/Logo";

export function Footer() {
  return (
    <footer className={styles.footerBg}>
      <Container>
        <div className={styles.footerWrapper}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            elementum orci, vitae commodo nibh. In vitae convallis nisl. Morbi
            rhoncus mattis purus sed commodo. Integer rhoncus ex risus. Proin
            efficitur elit nunc, ut pulvinar massa egestas in. Fusce quis quam
            viverra, pretium quam ac, consectetur lectus.
          </p>

          <div className={styles.divider}></div>

          <div className={styles.copyWrapper}>
            <div className={styles.logo}>
              <a href="#">
                <Logo size={50} />
              </a>
            </div>

            <p className={styles.paragraph}>
              © Copyright © 2021 Lorem ipsum dolor sit amet.
            </p>

            <p className={styles.madeFor}>
              Feito por:{" "}
              <a href="https://alpes.one/" target="_blank">
                <img src={LogoAlpes} alt="" />
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
