import React from 'react';
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import crlogo from './assets/Navbar/crlogo.svg';
import dotIcon from './assets/Navbar/dotIcon.svg';
import iconFirst from './assets/Navbar/iconFirst.svg';
import iconSecond from './assets/Navbar/iconSecond.svg';

function Navbar() {
  return (
      <AppBar
        style = {{
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
          width: '100%', height: '100px', marginTop: '-25px', 
        }}
      >
        <AppBarSection
          style = {{
            borderRight: '1px solid lightgray',
            width: '245px'
          }}
        >
          <img src = {crlogo} alt = 'cr logo' style = {{ height: '50px' }}/>
          <h1 style = {{ margin: '10px', fontWeight: 'normal', color: 'lightgreen', fontSize: '24px' }}>CLOUD RENT</h1>
        </AppBarSection>

        <AppBarSection>
          <img src={dotIcon} alt="dotIcon" />
          <p style = {{marginLeft: '15px', fontSize: '18px'}}>
            Bosch 11304k Bruit
            <br/>
            Breaker hammer
          </p>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection style = {{color: 'gray', fontSize: '20px'}}>
          Record 2 to 10
        </AppBarSection>

        <AppBarSection>
          <img src={iconFirst} alt="iconFirst" style = {{height: '25px'}} />
        </AppBarSection>
        <AppBarSection>
          <img src={iconSecond} alt="iconSecond" style = {{height: '25px'}} />
        </AppBarSection>
      </AppBar>
  )
}

export default Navbar