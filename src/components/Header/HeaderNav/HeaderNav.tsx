import { FC } from "react";

import { Link } from "react-router-dom";

import styles from "../Header.module.scss";

const HeaderNav: FC = () => {
    return (
        <nav className={styles.headerNav}>
            <ul>
                <li>
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="">About</Link>
                </li>
                <li>
                    <Link to="">Pages</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="">Projects</Link>
                </li>
                <li>
                    <Link to="">News</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;