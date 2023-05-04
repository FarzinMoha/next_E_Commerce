import Image from "next/image";
import styles from "./HeroSection.module.scss";
import React from "react";
import { bannerResponse } from "@/type/types";

type props = {
    banner:bannerResponse
}

const HeroSection = ({banner}:props) => {
    const {image , image2 , text , title1} = banner    
  return (
    <div>
      <Image
        className={styles.banner}
        src={image}
        alt={title1}
        width={2000}
        height={1000}
      />
      <div className={styles.title}>
        <h1>{title1}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroSection;
