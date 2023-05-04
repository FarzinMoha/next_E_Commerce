import { TYPElogoProps } from "@/type/types";
import React from "react";

const ConverseIcon = ({width , height , color , marginLeft ,marginRight,cursor}:TYPElogoProps) => {
  return (
    <svg style={{marginLeft:`${marginLeft}px` , marginRight:`${marginRight}px` , cursor: cursor ? 'pointer' : 'default'}} height={height} width={width} fill={color} viewBox="0 0 39 33">
      <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path>
    </svg>
  );
};

export default ConverseIcon;
