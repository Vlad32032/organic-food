import { FC } from "react";

import styles from "./CartCard.module.scss";

import { ICartItem } from "../../../../redux/cart/types";
import { useAppDispatch } from "../../../../redux/store";
import { removeAllCartItem } from "../../../../redux/cart/slice";


import FoodPrice from "../../FoodCards/FoodPrice/FoodPrice";
import CartActions from "../CartActions/CartActions";
import ButtonMain from "../../Buttons/ButtonMain/ButtonMain";

const CartCard: FC<ICartItem> = ({ id, title, price, images, quantity }) => {
    const dispatch = useAppDispatch();

    const item = {
        id: id,
        title: title,
        price: price,
        images: images,
        quantity: quantity
    };

    const onClickDelite = () => {
        dispatch(removeAllCartItem(id))
    };

    return (
        <article className={styles.cartItem}>
            <img src={images[0]} alt={title} />

            <div className={styles.wrapper}>
                <h3>{title}</h3>

                <FoodPrice price={price} quantity={quantity}/>
            </div>
            <div>
                <CartActions {...item} />
            </div>

            <ButtonMain onClick={onClickDelite}>Delete</ButtonMain>
        </article>
    );
};

export default CartCard;