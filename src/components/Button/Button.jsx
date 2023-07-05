import React from "react";
import * as styles from './Button.module.scss';

export const Button = ({ onClick, children  }) => {
    return (
        <button className={styles.root} onClick={onClick}>
            {children}
        </button>
    )
};