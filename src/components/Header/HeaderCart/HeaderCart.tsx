import { FC, useEffect, useRef } from "react";

import styles from "../Header.module.scss";

import { Link } from "react-router-dom";

import { useAppSelector } from "../../../redux/store";
import { selectCartState } from "../../../redux/cart/selectors";

import { IconsCart } from "../../Icons/Icons";

const HeaderCart: FC = () => {
    const { cartItems } = useAppSelector(selectCartState);
    const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			localStorage.setItem('pizzasCartItems' , JSON.stringify(cartItems));

			return
		};

		isMounted.current = true
	}, [cartItems]);

    return (
        <Link to='/cart' className={styles.headerCart}>
            <IconsCart />

            <span>{`Cart (0)`}</span>
        </Link>
    );
};

export default HeaderCart;