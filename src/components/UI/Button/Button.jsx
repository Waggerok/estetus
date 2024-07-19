import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={styles.button}>
            <span>
                {props.name}
            </span>
        </button>
    );
};

export default Button;