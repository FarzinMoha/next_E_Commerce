import { TYPEwrapperProps } from "@/type/types";
import styles from "./Wrapper.module.scss";
import React from "react";
import cls from "classnames";

const Wrapper = ({ children, className }: TYPEwrapperProps) => {
  return <div className={cls(styles.wrapper, className)}>{children}</div>;
};

export default Wrapper;
