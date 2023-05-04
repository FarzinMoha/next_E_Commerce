import { TYPElogoProps } from "@/type/types";
import React from "react";

const Logo = ({width , height , color , marginLeft ,marginRight,cursor}:TYPElogoProps) => {
  return (
    <svg
    style={{marginLeft:`${marginLeft}px` , marginRight:`${marginRight}px` , cursor: cursor ? 'pointer' : 'default'}}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width={width}
      height={height}
      fillRule="nonzero"
    >
      <g
        fill="#000000"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        // style="mix-blend-mode: normal"
      >
        <g transform="scale(5.33333,5.33333)">
          <path d="M6,16c-3.1,3.7 -6,7.6 -6,11.1c0,2 1.7,4.9 5.9,4.9c2.3,0 4.5,-0.9 6.3,-1.6c3,-1.2 35.7,-15.1 35.7,-15.1c0.3,-0.2 0.3,-0.4 -0.1,-0.3c-0.2,0 -35.6,9.4 -35.6,9.4c-0.7,0.2 -1.4,0.3 -2.1,0.3c-3.1,0 -5.1,-1.5 -5.1,-4.7c-0.1,-1.3 0.1,-2.2 1,-4z"></path>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
