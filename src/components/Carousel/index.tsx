import { Button } from "../Button";
// import { Form } from "../Form";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export function Carousel() {
  return (
    <div className={styles.carouselWrapper}>
      <Button styleType="tertiary">Solicite uma cotação</Button>

      <div className={styles.bannerBg}>
        <Container>
          <div className={styles.carouselFormWrapper}>
            <div></div>

            <div className={styles.carouselForm}>{/* <Form /> */}</div>
          </div>
        </Container>

        <div className={styles.dots}>
          <div className={styles.firstDot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
}
