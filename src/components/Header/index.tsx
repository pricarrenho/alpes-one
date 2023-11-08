import { Logo } from "../../assets/svg/Logo";
import { Phone } from "../../assets/svg/Phone";
import { Button } from "../Button";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <Container>
      <header className={styles.headerWrapperMobile}>
        <div className={styles.contactMobile}>
          <Phone size={19} color="#666666" />
          <a href="tel:+552120424442">
            <p>(21) 2042-4442</p>
          </a>
        </div>

        <div>
          <a href="#">
            <Logo size={35} />
          </a>
        </div>
      </header>

      <header className={styles.headerWrapperDesktop}>
        <div className={styles.contactDesktop}>
          <div className={styles.buttonsWrapper}>
            <Button
              styleType="primary"
              icon="phone"
              as="a"
              href="tel:+552120424442"
            >
              (21) 2042-4442
            </Button>
            <Button styleType="primary" icon="tour" as="a" href="#">
              Tour Virtual
            </Button>
            <Button
              styleType="secondary"
              icon="whatsapp"
              as="a"
              href="https://api.whatsapp.com/send?phone=5519994082808&text=Olá,%20tenho%20interesse%20em%20fazer%20um%20orçamento!"
            >
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
          <a href="#">
            <Logo size={92} />
          </a>
        </div>
      </header>
    </Container>
  );
}
