import React from 'react';
import "@progress/kendo-theme-material/dist/all.css";
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import data from './data';

const Table = () => {

  return (
    <Grid
      data={data}
      style = {{
        height: "400px",
        width: "1050px",
        // alignItems: 'center',
        // margin: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '5px',
        // marginLeft: 'auto',
        // marginRight: '75px',
        // marginTop: '-15px',
      }}
    >
      <GridColumn field="Order No#" title="Order No#" />
      <GridColumn field="Date" title="Date" />
      <GridColumn field="Supplier" title="Supplier" />
      <GridColumn field="Comments" title="Comments"  width="250px" />
      <GridColumn field="Qty" title="Qty" />
      <GridColumn field="Price" title="Price" />
    </Grid>
  )
};
 export default Table;