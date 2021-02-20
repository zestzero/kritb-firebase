import { combinCss } from 'utils/cssUtils';
import * as styles from './DesignPage.module.scss';

const DesignPage = () => {
  const renderColor = (value: string) => (
    <div>
      <span className={combinCss(styles.box, styles[value])} />
      {value} <code>var(--color-${value})</code>
    </div>
  );
  return (
    <>
      <h1>Design catalog</h1>
      <h2>Colors</h2>
      {renderColor("primary")}
      {renderColor("secondary")}
      {renderColor("black")}
      {renderColor("additional")}
    </>
  );
};

export default DesignPage;
