import styles from './card.module.css';
import Link from 'next/link';

type CardProps = {
    title: string;
    description: string;
    disabled: boolean;
};

const handleClick = (description: string) => {
    alert(description);
};

const Card = ({ title, description, disabled }: CardProps) => {
    const classNames = `${styles.card} ${disabled && styles.disabled}`;
    return (
        <div className={classNames} onClick={() => handleClick(description)}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;
