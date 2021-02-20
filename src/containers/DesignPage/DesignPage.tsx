import Card from "components/common/Card/Card";
import Button from "components/common/Form/Button/Button";
import Input from "components/common/Form/Input/Input";
import { combinCss } from "utils/cssUtils";
import styles from "./DesignPage.module.scss";

const DesignPage = () => {
  return (
    <>
      <h1>Design catalog</h1>
      <ColorSection />
      <FormSection />
    </>
  );
};

export default DesignPage;

const ColorSection = () => {
  const renderColor = (value: string) => (
    <div className={styles.row}>
      <span className={combinCss(styles.box, styles[value])} />
      {value} <code>var(--color-${value})</code>
    </div>
  );

  return (
    <>
      <h2>Colors</h2>
      {renderColor("primary")}
      {renderColor("secondary")}
      {renderColor("black")}
      {renderColor("additional")}
    </>
  );
};

const FormSection = () => {
  return (
    <>
      <h2>Form</h2>
      <Card>
        <div className={styles.row}>
          <Input type="text" defaultValue="sample" />
          <code>type="text"</code>
        </div>
        <div className={styles.row}>
          <Input type="password" defaultValue="sample" />
          <code>type="password"</code>
        </div>
        <div className={styles.row}>
          <Button type="primary" text="button" />
          <code>type="primary"</code>
          <Button type="outlined" text="button" />
          <code>type="outlined"</code>
        </div>
      </Card>
    </>
  );
};
