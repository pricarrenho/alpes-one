import { useState } from "react";
import { Button } from "../Button";
import { Form } from "../Form";
import Slider from "react-slick";
import bannerDesktop from "../../assets/img/desktop-banner.png";
import bannerMobile from "../../assets/img/mobile-banner.png";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export function Carousel() {
  const [formVisible, setFormVisible] = useState(true);

  const handleToggleForm = () => {
    setFormVisible((prevState) => !prevState);
    document.querySelector("body")?.classList.toggle("no-scroll");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const banners = [
    {
      mobileImage: bannerMobile,
      desktopImage: bannerDesktop,
      alt: "Banner onde aparece uma BMW Série 3 Sedan M, preta, passando por uma rua, com pedestres ao lado em uma calçada",
    },
    {
      mobileImage: bannerMobile,
      desktopImage: bannerDesktop,
      alt: "Banner onde aparece uma BMW Série 3 Sedan M, preta, passando por uma rua, com pedestres ao lado em uma calçada",
    },
    {
      mobileImage: bannerMobile,
      desktopImage: bannerDesktop,
      alt: "Banner onde aparece uma BMW Série 3 Sedan M, preta, passando por uma rua, com pedestres ao lado em uma calçada",
    },
  ];

  return (
    <>
      <div className={styles.carouselWrapper}>
        <div className={styles.mobileButton}>
          <Button styleType="tertiary" onClick={handleToggleForm}>
            Solicite uma cotação
          </Button>
        </div>

        <Container>
          <Form handleClose={handleToggleForm} hide={formVisible} />
        </Container>

        <div>
          <Slider {...settings} className={styles.carousel}>
            {banners.map((banner, index) => (
              <div key={index}>
                <picture>
                  <source
                    srcSet={banner.desktopImage}
                    media="(min-width: 800px)"
                  />
                  <source srcSet={banner.mobileImage} />
                  <img
                    src={banner.mobileImage}
                    alt="Responsive Image"
                    className={styles.banner}
                    width={1351}
                    height={550}
                  />
                </picture>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
