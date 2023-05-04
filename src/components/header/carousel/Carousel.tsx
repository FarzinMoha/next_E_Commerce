import React from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Styles from "./CarouselItem.module.scss";

const Carousel = () => {
  return (
    <CCarousel>
      <CCarouselItem>
        <div className={Styles.container}>
          <span style={{fontSize:'14px',fontWeight:'bold'}}>Mother’s Day: Get Your Gifts Fast</span>
          <span style={{fontSize:'12px',textDecoration:'underline' , fontWeight:'bold'}}>
            Members get free expedited shipping on orders $150+. Ends 5.7. Shop
            now.
          </span>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className={Styles.container}>
          <span style={{fontSize:'14px',fontWeight:'bold'}}>
            Free Shipping + Returns, Free Membership, Exclusive Products
          </span>
          <span style={{fontSize:'12px',textDecoration:'underline' , fontWeight:'bold'}}>Join Now</span>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className={Styles.container}>
          <span style={{fontSize:'14px',fontWeight:'bold'}}>Limited Time: Earn $75 with a new Apple Card.</span>
          <span style={{fontSize:'12px',textDecoration:'underline' , fontWeight:'bold'}}>Learn more. Terms apply.</span>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className={Styles.container}>
          <span style={{fontSize:'14px',fontWeight:'bold'}}>New Markdowns: Up to 40% Off</span>
          <span style={{fontSize:'12px',textDecoration:'underline' , fontWeight:'bold'}}>Shop just-reduced styles—no code needed.</span>
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
