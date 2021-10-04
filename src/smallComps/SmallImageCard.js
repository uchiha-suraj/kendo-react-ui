import React from 'react';
import {
  CardImage,
} from "@progress/kendo-react-layout";

function SmallImageCard({ img }) {
  return (
    <div
      style = {{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '5px',
        height: '60px',
        width: '100px',
        marginRight: '10px',
      }}
    >
      <CardImage src = {img} />
    </div>
  )
}

export default SmallImageCard
