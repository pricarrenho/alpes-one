import styles from "./styles.module.scss";

import { InputProps } from "./types";

export function Input({ name, placeholder }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input type="text" name={name} placeholder={placeholder} />
    </div>
  );
}
