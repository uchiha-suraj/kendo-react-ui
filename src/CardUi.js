import * as React from "react";
import ImageCard from "./smallComps/ImageCard";
import hammer from "./assets/Cart/hammer.jpg";
import icon from "./assets/Cart/file-upload-outline.svg"

const CardUi = () => {
  return (
    <div>
      <ImageCard 
        img = {hammer} 
        text = {'Bosch 11304k Bruit Breaker hammer'}  
        icon = {icon}  
      />
    </div>
  )
}

export default CardUi;