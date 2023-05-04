import React from "react";
import styles from "./Header.module.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "@/icons/Logo";
import RightSection from "./right-section/RightSection";
import HeaderItems from "./header-items/HeaderItems";

const Header = () => {
  return (
    <div className={styles.header}>
      <Wrapper className={styles.container}>
        <div className={styles.logo}>
          <Logo width={60} height={60} color="" cursor />
        </div>
        <div className={styles.items}>
            <HeaderItems>New & Featured</HeaderItems>
            <HeaderItems>Men</HeaderItems>
            <HeaderItems>Women</HeaderItems>
            <HeaderItems>Kids</HeaderItems>
            <HeaderItems>Accessories</HeaderItems>
            <HeaderItems>Sale</HeaderItems>
        </div>
        <RightSection/>
      </Wrapper>
    </div>
  );
};

export default Header;

