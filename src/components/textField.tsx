import { FC, HTMLInputTypeAttribute } from "react";

interface TProps {
  label: string;
  name: string;
  value: any;
  type?: HTMLInputTypeAttribute;
  onChange: (value: any) => void;
}

const TextField: FC<TProps> = ({
  label,
  name,
  value,
  type,
  onChange,
}: TProps) => (
  <div className="text-field">
    <span>
      <label>{label}</label>
    </span>
    <input
      name={name}
      onChange={(e) => onChange(e)}
      className="text-input"
      value={value}
      type={type}
      required
    />
  </div>
);

export default TextField;
