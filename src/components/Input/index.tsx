import styles from "./styles.module.scss";

import { InputProps } from "./types";

export function Input({ name, placeholder }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{placeholder}</label>

      <input type="text" name={name} />
    </div>
  );
}
