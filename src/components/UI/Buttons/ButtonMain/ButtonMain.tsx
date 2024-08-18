import { FC, ReactNode } from "react";

import styles from "./ButtonMain.module.scss";

import { IconsButton } from "../../../Icons/Icons";

interface IButtonMain {
    buttonStyle?: string,
    children: ReactNode,
    onClick?: () => void
}

const ButtonMain: FC<IButtonMain> = ({ buttonStyle, children, onClick }) => {
    const getClassName = () => {
        if (buttonStyle === 'main') return styles.buttonMain;
        if (buttonStyle === 'second') return styles.buttonSecond;
        if (buttonStyle === 'third') return styles.buttonThird;
        return '';
    };

    return (
        <button
            className={`${styles.button} ${getClassName()}`}
            type="button"
            onClick={onClick}
        >
            { children }
            {buttonStyle && <IconsButton />}
        </button>
    );
};

export default ButtonMain;