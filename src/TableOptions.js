import React from 'react';
import "@progress/kendo-theme-material/dist/all.css";
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { CardActions } from "@progress/kendo-react-layout";
import data from './tableOptionData';
import icons from './assets/Table/TableIcon.svg';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer
} from "@progress/kendo-react-layout";
import {Button} from "@progress/kendo-react-buttons";

const mystyle = {
  alignItems: 'center',
  margin: '15px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  borderRadius: '10px',
  width: '730px',
  marginLeft: '-2px'
};

const mystyleGrid = {
  alignItems: 'center',
  margin: '15px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  borderRadius: '10px',
  width: '730px',
  marginLeft: '-2px'
}


const tableIcon = () => {
  return (
    <td>
      <img src = {icons} alt = 'icons' style = {{ height: '18px' }} />
    </td>
  )
}

const TableOptions = () => {
  return (
    <div>
      <div
        style={mystyle}
      >
        <AppBar>
          <AppBarSection
            style = {{
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              borderRadius: '10px',
              marginLeft: '10px',
            }}
          >
            <ul>
              <li>DETAILS</li>
              <li>RATES & KITS</li>
              <li>ASSETS</li>
              <li>HISTORY</li>
              <li>MAINTENANCE</li>
            </ul>
          </AppBarSection>
        </AppBar>
        <style>
          {
            `
            ul {
              list-style-type: none;
              padding: 0;
              display: flex;
              width: 650px;
              height: 20px;
            }
            li {
              margin-right: 40px;
              margin-left: 40px;
              font-weight: bold;
              font-size: 9px;
            }
            li:hover {
                cursor: pointer;
                color: lightgreen;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            }
            `
          }
        </style>
      </div>
      <div
        style={mystyleGrid}
      >
        <Grid
          data={data}
          style = {{
            height: "400px",
            alignItems: 'center',
            margin: '15px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            borderRadius: '5px',
            fontSize: '10px'
          }}
        >
          <GridColumn field="Asset No#" title="Asset No#" width = "110px" />
          <GridColumn field="Serial No#" title="Serial No#" width = "110px" />
          <GridColumn field="Item name" title="Item name" width = "150px" />
          <GridColumn field="Next Test" title="Next Test" width = "110px" />
          <GridColumn field="Status" title="Status" width = "100px" />
          <GridColumn field="" title="" cell = {tableIcon} width = "" />
        </Grid>

        <CardActions>
          <Button 
            togglable={true}
            style = {{backgroundColor: 'lightgreen', borderRadius: '5px', height: '30px', width: '200px', marginBottom: '10px'}} 
          >
            Add New Asset
          </Button>
        </CardActions>
      </div>
    </div>
  )
}

export default TableOptions
