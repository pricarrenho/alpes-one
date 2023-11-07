import { CardCars } from "./components/CardCars";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />

      <Carousel />

      <CardCars />

      <Footer />
    </div>
  );
}
