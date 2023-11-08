import styles from "./styles.module.scss";

import { Car } from "../../assets/svg/Car";
import { Input } from "../Input";
import { Button } from "../Button";

export function Form() {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>
        <Car color="#1C69D4" size={23} />
        <h2>Solicitar cotação</h2>
      </div>

      <Input name="name" placeholder="Nome" />
      <Input name="email" placeholder="E-mail" />
      <Input name="phone" placeholder="Telefone" />

      <select name="models" id="models" className={styles.selectInput}>
        <option value="car1">Modelo</option>
        <option value="car2">BMW Série 1</option>
        <option value="car3">BMW M3 Competition</option>
        <option value="car3">BMW M5</option>
      </select>

      <Input name="message" placeholder="Mensagem" />

      <div className={styles.checkboxInput}>
        <input type="checkbox" id="privacyPolicy" />
        <label htmlFor="privacyPolicy">
          Aceito a <span>Política de Privacidade</span>.
        </label>
      </div>

      <Button styleType="tertiary">Enviar</Button>
    </div>
  );
}
