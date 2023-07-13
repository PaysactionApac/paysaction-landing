import React from "react";
import * as styles from './Button.module.scss';

export const Button = ({ type = 'button', onClick, children  }) => {
    return (
        <button type={type} className={styles.root} onClick={onClick}>
            {children}
        </button>
    )
};