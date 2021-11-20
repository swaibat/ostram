import { FunctionComponent } from "react";

interface TProps {
  label: string;
  name: string;
  value: any;
}

const TextField: FunctionComponent<TProps> = ({
  label,
  name,
  value,
}: TProps) => (
  <div className="text-field">
    <span>
      <label>{label}</label>
    </span>
    <input name={name} className="text-input" value={value} />
  </div>
);

export default TextField;
