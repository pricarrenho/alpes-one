import styles from "./styles.module.scss";
import Serie1 from "../../assets/img/serie1.png";
import M3 from "../../assets/img/m3.png";
import M5 from "../../assets/img/m5.png";
import X2 from "../../assets/img/x2.png";
import Serie4 from "../../assets/img/serie-4.png";
import Serie3 from "../../assets/img/serie-3.png";
import Z4 from "../../assets/img/z4.png";
import Serie2 from "../../assets/img/serie2.png";
import { Button } from "../Button";
import { Whatsapp } from "../../assets/svg/Whatsapp";
import { Facebook } from "../../assets/svg/Facebook";
import { Container } from "../Container";

export function CardCars() {
  const cars = [
    {
      title: "BMW Série 1",
      image: {
        url: Serie1,
        alt: "Foto da BMW Série 1",
      },
    },
    {
      title: "BMW M3 Competition",
      image: {
        url: M3,
        alt: "Foto da BMW M3 Competition",
      },
    },
    {
      title: "BMW M5",
      image: {
        url: M5,
        alt: "Foto da BMW M5",
      },
    },
    {
      title: "BMW X2",
      image: {
        url: X2,
        alt: "Foto da BMW X2",
      },
    },
    {
      title: "BMW Série 4",
      image: {
        url: Serie4,
        alt: "Foto da BMW Série 4",
      },
    },
    {
      title: "BMW Série 3",
      image: {
        url: Serie3,
        alt: "Foto da BMW Série 3",
      },
    },
    {
      title: "BMW Z4",
      image: {
        url: Z4,
        alt: "Foto da BMW Z4",
      },
    },
    {
      title: "BMW Série 2",
      image: {
        url: Serie2,
        alt: "Foto da BMW Série 2",
      },
    },
  ];

  return (
    <Container>
      <div className={styles.cardCarWrapper}>
        <h1 className={styles.title}>ESCOLHA SEU BMW</h1>

        <div className={styles.contentWrapper}>
          {cars.map((car) => {
            return (
              <div className={styles.content} key={car.title}>
                <img
                  src={car.image.url}
                  alt={car.image.alt}
                  width={315}
                  height={172}
                  className={styles.carImage}
                  loading="lazy"
                />

                <h2 className={styles.subtitle}>{car.title}</h2>

                <div className={styles.buttonsWrapper}>
                  <Button styleType="tertiary">Cotação</Button>

                  <Button styleType="quaternary">Ligar</Button>
                </div>

                <div className={styles.shareWrapper}>
                  <p>Compartilhe:</p>

                  <a href="#">
                    <Facebook color="#666666" size={24} />
                  </a>

                  <a href="#">
                    <Whatsapp color="#666666" size={24} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
