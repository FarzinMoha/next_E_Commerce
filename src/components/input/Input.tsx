import { TYPEinputProps } from "@/type/types";
import React, { InputHTMLAttributes } from "react";
import cls from "classnames";
import styles from "./Input.module.scss";
import SearchIcon from "@/icons/SearchIcon";
import pallet from "@/pallet/pallet";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement> & TYPEinputProps> = ({rootClass, leftIcon , ...props}) => {
  return (
    <div className={styles.container}>
      <input className={cls(styles.input)} {...props}/>
      <span className={styles.iconContainer}>
        <SearchIcon cursor width={23} height={23} color={pallet.black}/>
      </span>
    </div>
  );
};

export default Input;
