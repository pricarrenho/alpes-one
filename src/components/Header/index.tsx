import styles from "./styles.module.scss";

import { Logo } from "../../assets/svg/Logo";
import { Phone } from "../../assets/svg/Phone";
import { Button } from "../Button";
import { Container } from "../Container";

export function Header() {
  return (
    <Container>
      <header className={styles.headerWrapperMobile}>
        <div className={styles.contactMobile}>
          <Phone size={19} color="#666666" />
          <p>(21) 2042-4442</p>
        </div>

        <div>
          <p>
            <Logo size={35} />
          </p>
        </div>
      </header>

      <header className={styles.headerWrapperDesktop}>
        <div className={styles.contactDesktop}>
          <div className={styles.buttonsWrapper}>
            <Button styleType="primary" icon="phone">
              (21) 2042-4442
            </Button>
            <Button styleType="primary" icon="tour">
              Tour Virtual
            </Button>
            <Button styleType="secondary" icon="whatsapp">
              Whatsapp
            </Button>
          </div>

          <div className={styles.ruler}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>7</p>
            <p>8</p>
            <p>X</p>
            <p>Z</p>
            <p>M</p>
            <p>i</p>
            <p>Plug-in-Hybrid</p>
          </div>
        </div>

        <div>
          <p>
            <Logo size={92} />
          </p>
        </div>
      </header>
    </Container>
  );
}
