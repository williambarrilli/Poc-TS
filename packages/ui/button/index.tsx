import { forwardRef } from "react";
import objStr from "obj-str";
import styles from "./styles.module.scss";

interface buttonPropps {
  text?: string;
  hierarchy?: string;
  destructive?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, buttonPropps>(
  ({
    text,
    hierarchy = "primary",
    destructive = false,
    disabled = false,
    ...rest
  }) => {
    return (
      <div>
        <button
          {...rest}
          className={`${objStr({
            [styles["button"]]: true,

            [styles[`button--${hierarchy}`]]: true,
            [styles["button--destructive"]]: destructive,
          })}`}
        >
          {text}
        </button>
      </div>
    );
  }
);

Button.displayName = "Button";
