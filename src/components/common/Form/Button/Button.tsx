import { combineCss } from 'utils/cssUtils';
import styles from './Button.module.scss';

interface Props {
    text: string;
    type: 'primary' | 'outlined';
    onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
    return (
        <button className={combineCss(styles.button, styles[props.type])}>{props.text}</button>
    )
};

export default Button;
