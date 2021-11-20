import { FunctionComponent } from "react";

interface TProps {
  label: string;
  name: string;
}

const TextField: FunctionComponent<TProps> = ({ label, name }: TProps) => (
  <div className="text-field">
    <span>
      <label>{label}</label>
    </span>
    <input name={name} className="text-input" />
  </div>
);

export default TextField;
