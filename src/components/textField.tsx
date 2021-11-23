import { FC, HTMLInputTypeAttribute } from "react";
import styles from "../app.module.scss";

interface TProps {
  label: string;
  name: string;
  value?: any;
  type?: HTMLInputTypeAttribute;
  onChange?: any;
}

const TextField: FC<TProps> = ({
  label,
  name,
  value,
  type,
  onChange,
}: TProps) => {
  const handleChange = (e: any) => {
    onChange(e)
  }
  return <div className={styles.textField}>
    <span>
      <label htmlFor={name}>{label}</label>
    </span>
    <input
      name={name}
      id={name}
      onChange={handleChange}
      className={styles.textInput}
      value={value}
      type={type}
      required
    />
  </div>
};

export default TextField;
