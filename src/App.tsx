import { Whatsapp } from "./assets/svg/Whatsapp";
import { CardCars } from "./components/CardCars";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import styles from "./styles.module.scss";

export function App() {
  return (
    <div>
      <Header />

      <Carousel />

      <CardCars />

      <Footer />

      <button className={styles.whatsappButton}>
        <Whatsapp size={36} color="#FFFFFF" />
      </button>
    </div>
  );
}
