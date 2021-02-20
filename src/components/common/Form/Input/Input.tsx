import styles from "./Input.module.scss";

interface Props {
  type: "text" | "password";
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  type,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default Input;
