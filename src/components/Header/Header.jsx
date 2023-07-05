import * as React from "react";
import { Link } from "gatsby";
import * as styles from './Header.module.scss';
import LogoSvg from '../../images/logo.svg';

export const Header = ({ siteTitle }) => (
  <header className={styles.root}>
    <Link
      to="/"
      className={styles.link}
    >
        <img
            alt="Paysaction logo"
            src={LogoSvg}
            className={styles.logo}
        />
        <span>{siteTitle}</span>
    </Link>
  </header>
);
