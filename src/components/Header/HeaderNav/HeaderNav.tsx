import { FC } from "react";

import styles from "../Header.module.scss";

import { Link } from "react-router-dom";

import { dataNav } from "../../../assets/data/data";

const HeaderNav: FC = () => {
    const nav = dataNav;

    return (
        <nav className={styles.headerNav}>
            <ul>
                {nav.map((link) => <li><Link to={link.pathname}>{link.name}</Link></li>)}
            </ul>
        </nav>
    );
};

export default HeaderNav;