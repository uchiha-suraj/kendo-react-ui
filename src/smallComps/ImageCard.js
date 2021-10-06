import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  CardSubtitle,
} from "@progress/kendo-react-layout";
import {Button} from "@progress/kendo-react-buttons";
import SmallImageCard from './SmallImageCard';
import CardButton from './CardButton';

function ImageCard({ img, text, icon }) {
  
  const uploadIcon = () => {
    return (
      <td>
        <img src = {icon} alt = 'icon' style = {{ height: '18px' }} />
      </td>
    )
  }

  return (  
    <Card style = {{
      borderRadius: '10px',
      justifyContent: 'space-evenly',
      margin: '15px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      width: '300px',
    }}>
      <CardHeader>
      <CardImage src = {img} text = {text} icon = {icon}/>
        
          <div
            style = {{
              display: 'flex',
              flexDirection: 'row',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              borderRadius: '5px',
            }}
          >
            <div
              style = {{
                fontWeight: 'normal',
                textAlign: 'center',
                marginTop: '15px',
                marginLeft: '5px',
                fontSize: '12px'
              }}
            >
              {text}
            </div>
            <div
              style = {{
                margin: '8px',    
                // marginLeft: 'auto',
                marginLeft: '30px'
              }}
            >
              <CardImage src = {icon} style = {{ width: '20px'}} />
            </div>         
          </div>
        </CardHeader>
        <CardBody>
          <div
            style = {{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <SmallImageCard img = {img} />
            <SmallImageCard img = {img} />
            <SmallImageCard img = {img} />
            <SmallImageCard img = {img} />
          </div>

          <div
            style = {{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <CardButton />
            <CardButton />
            <CardButton />
          </div>

          <div
            style = {{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Card>
              <div
                style = {{
                  height: '20px',
                  marginTop: '10px',
                  marginLeft: '120px',
                }}
              >
                <CardImage src = {icon} style = {{ width: '30px' }}/>
              </div>
              <h3 style = {{textAlign: 'center', marginTop: '30px'}}>Drag a file here</h3>
            </Card>
          </div>

          <div>
            <CardActions>
              <Button 
                togglable={true}
                style = {{backgroundColor: 'lightgreen', borderRadius: '5px', height: '30px', width: '350px', marginTop: '10px', marginBottom: '-5px'}} 
              >
                Button
              </Button>
            </CardActions>  
          </div>
        </CardBody>
    </Card>
  )
}

export default ImageCard
