import { Whatsapp } from "./assets/svg/Whatsapp";
import { CardCars } from "./components/CardCars";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";

export function App() {
  return (
    <div>
      <Header />

      <Carousel />

      <CardCars />

      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=5519999999999&text=Olá,%20tenho%20interesse%20em%20fazer%20um%20orçamento!"
        target="_blank"
        className={styles.whatsappButton}
      >
        <Whatsapp size={36} color="#FFFFFF" />
      </a>
    </div>
  );
}
