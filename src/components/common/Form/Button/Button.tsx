interface Props {
    onClick?: () => void;
    text: string;
}

const Button: React.FC<Props> = (props) => {
    return (
        <button>{props.text}</button>
    )
};

export default Button;
