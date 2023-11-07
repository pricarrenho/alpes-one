import { Phone } from "../../assets/svg/Phone";
import { Tour } from "../../assets/svg/Tour";
import { Whatsapp } from "../../assets/svg/Whatsapp";
import { ButtonProps } from "./types";
import styles from "./styles.module.scss";

export function Button({ children, icon, styleType, ...props }: ButtonProps) {
  const icons = {
    phone: <Phone size={19} color="white" />,
    whatsapp: <Whatsapp size={19} color="white" />,
    tour: <Tour size={19} color="white" />,
  };

  return (
    <button {...props} className={styles[styleType]}>
      {icon && icons[icon]} {children}
    </button>
  );
}
