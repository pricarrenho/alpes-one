import { useState } from "react";
import { Button } from "../Button";
import { Form } from "../Form";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export function Carousel() {
  const [formVisible, setFormVisible] = useState(false);

  const handleOpenForm = () => {
    setFormVisible(true);
    document.querySelector("body")?.classList.add("no-scroll");
  };

  const handleCloseForm = () => {
    setFormVisible(false);
    document.querySelector("body")?.classList.remove("no-scroll");
  };

  return (
    <div className={styles.carouselWrapper}>
      <Button styleType="tertiary" onClick={handleOpenForm}>
        Solicite uma cotação
      </Button>

      <div className={styles.bannerBg}>
        <Container>
          <div className={styles.carouselFormWrapperMobile}>
            {formVisible && (
              <div>
                <Form handleClose={handleCloseForm} />
              </div>
            )}
          </div>

          <div className={styles.carouselFormWrapperDesktop}>
            <div></div>

            <div className={styles.carouselForm}>
              <Form />
            </div>
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
