import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import dashboard from './assets/Sidebar/home.svg';
import rental from './assets/Sidebar/home-city.svg';
import clients from './assets/Sidebar/account-multiple.svg';
import freight from './assets/Sidebar/truck.svg';
import financials from './assets/Sidebar/finance.svg';
import pos from './assets/Sidebar/cart.svg';
import administration from './assets/Sidebar/account-tie.svg';

const click = {
  backgroundColor: 'green'
}

const Sidebar = () => {

  const handleSelect = e => {
    console.log(e.target.props.myCustomProp);
  };

  return (
    <div className="sidebar">
      <PanelBar 
        style = {{
          paddingRight: '20px',
          height: '730px',
          width: '270px',
        }}
        onSelect={handleSelect}
      >

      <PanelBarItem imageUrl = {dashboard} title="Dashboard" onClick = {click} />
      <PanelBarItem imageUrl = {rental} title="Rental" />
      <PanelBarItem imageUrl = {clients} title="Clients" />
      <PanelBarItem imageUrl = {dashboard} title="Inventory" />
      <PanelBarItem imageUrl = {freight} title="Freight" />
      <PanelBarItem imageUrl = {financials} title="Financial" />
      <PanelBarItem imageUrl = {financials} title="Calender" />
      <PanelBarItem imageUrl = {pos} title="POS" />
      <PanelBarItem imageUrl = {administration} title="Administration" /> 
           
      </PanelBar>
      <style>
         {
           `
           .k-panelbar > .k-item {
             width: 270px;
             height: 41px;
             margin-left: -2px;
           }
           .k-panelbar > .k-item > .k-link {
             color: black;
             font-size: 15px;
             font-weight: normal;
             cursor: pointer;
           }
           .k-panelbar > .k-item > .k-link:hover {
              background-color: lightGreen;
            }
           #panelbar.k-panelbar > .k-item > .k-link.k-state-selected      {
              background-color : lightGreen;
            }
            .k-panelbar > .k-item > .k-link.k-state-selected:hover {
              background-color : lightGreen;
            }
           `
         }
       </style>
    </div>
  )
}

export default Sidebar


