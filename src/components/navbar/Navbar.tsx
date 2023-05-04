import JordanIcon from "@/icons/JordanIcon";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Navbar.module.scss";

import React from "react";
import pallet from "@/pallet/pallet";
import ConverseIcon from "@/icons/ConverseIcon";
import NavbarItem from "./items/NavbarItem";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Wrapper className={styles.container}>
          <div className={styles.leftSection}>
            <JordanIcon width={24} height={24} color={pallet.black} />
            <ConverseIcon marginLeft={20} width={24} height={24} color={pallet.black} />
          </div>
          <div className={styles.rightSection}>
            <NavbarItem rightLine>Find a Store</NavbarItem>
            <NavbarItem rightLine>Help</NavbarItem>
            <NavbarItem rightLine>Join Us</NavbarItem>
            <NavbarItem>Sign In</NavbarItem>
          </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
