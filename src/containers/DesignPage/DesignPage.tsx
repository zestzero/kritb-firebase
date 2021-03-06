import Card from "components/common/Card/Card";
import Button from "components/common/Form/Button/Button";
import Input from "components/common/Form/Input/Input";
import { Grid, GridRow } from "components/common/Grid/Grid";
import { combinCss } from "utils/cssUtils";
import styles from "./DesignPage.module.scss";

const DesignPage = () => {
  return (
    <>
      <h1>Design system</h1>
      <ColorSection />
      <FormSection />
      <GridSection />
    </>
  );
};

export default DesignPage;

const ColorSection = () => {
  const renderColor = (value: string) => (
    <div className={styles.row}>
      <span className={combinCss(styles.box, styles[value])} />
      {value} <code>var(--color-{value})</code>
    </div>
  );

  return (
    <>
      <h2>Color palette</h2>
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
          <Input type="email" defaultValue="sample" /> <code>type="email"</code>
        </div>
        <div className={styles.row}>
          <Input type="password" defaultValue="sample" /> <code>type="password"</code>
        </div>
        <div className={styles.row}>
          <Button type="primary" text="button" /> <code>type="primary"</code>
        </div>
        <div className={styles.row}>
          <Button type="outlined" text="button" /> <code>type="outlined"</code>
        </div>
      </Card>
    </>
  );
};

const GridSection = () => {
  return (
    <>
      <h2>Grid</h2>
      <div className={styles.row}>
        <Grid>
          <code>ratio=[6, 4 ,2]</code>
          <GridRow ratio={[6, 4, 2]}>
            <div className={combinCss(styles.gridSample, styles.one)}>6</div>
            <div className={combinCss(styles.gridSample, styles.two)}>4</div>
            <div className={combinCss(styles.gridSample, styles.three)}>2</div>
          </GridRow>
        </Grid>
        <Grid>
          <code>ratio=[6, 6]</code>
          <GridRow ratio={[6, 6]}>
            <div className={combinCss(styles.gridSample, styles.one)}>6</div>
            <div className={combinCss(styles.gridSample, styles.two)}>6</div>
          </GridRow>
        </Grid>
      </div>
    </>
  );
};
