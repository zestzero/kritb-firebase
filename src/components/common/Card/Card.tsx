import { combineCss } from "utils/cssUtils";
import styles from "./Card.module.scss";

interface Props {
  withBg?: boolean;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div
      className={combineCss(styles.card, {
        [styles.cardWithBg]: props.withBg || false,
      })}
    >
      {props.children}
    </div>
  );
};

export default Card;
