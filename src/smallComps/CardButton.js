import React from 'react';
import {
  CardActions,
} from "@progress/kendo-react-layout";
import {Button} from "@progress/kendo-react-buttons";

function CardButton() {

  return (
    <div>
      <CardActions>
      <Button 
        togglable={true}
        style = {{backgroundColor: 'lightgreen', borderRadius: '5px', height: '30px', width: '70px'}} 
      >
        Button
      </Button>
      </CardActions>    
    </div>
  )
}

export default CardButton
