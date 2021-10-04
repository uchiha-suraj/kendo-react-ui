import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import dashboard from './assets/Sidebar/home.svg';
import rental from './assets/Sidebar/home-city.svg';
import clients from './assets/Sidebar/account-multiple.svg';
import freight from './assets/Sidebar/truck.svg';
import financials from './assets/Sidebar/finance.svg';
import pos from './assets/Sidebar/cart.svg';
import administration from './assets/Sidebar/account-tie.svg';

const style = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '25px',
  borderBottom: '1px solid gray',
}

const h2 = {
  marginLeft: '15px',
  fontWeight: 'normal',
  fontSize: '17px'
}

const greenActive = {
  backgroundColor: 'lightgreen'
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
          width: '270px'
        }}
        onSelect={handleSelect}
      >

      {/* <PanelBarItem imageUrl = {dashboard} title="Dashboard" className = "panelbar__item" />
      <PanelBarItem imageUrl = {rental} title="Rental" />
      <PanelBarItem imageUrl = {clients} title="Clients" />
      <PanelBarItem imageUrl = {dashboard} title="Inventory" />
      <PanelBarItem imageUrl = {freight} title="Freight" />
      <PanelBarItem imageUrl = {financials} title="Financial" />
      <PanelBarItem imageUrl = {financials} title="Calender" />
      <PanelBarItem imageUrl = {pos} title="POS" />
      <PanelBarItem imageUrl = {administration} title="Administration" /> */}
      
        <div style = {style}>
          <img src={dashboard} alt="dashboard" />
          <span>
            <h2 style = {h2}>Dashboard</h2>
          </span>
        </div>

        <div style = {style}>
          <img src={rental} alt="rental" />
          <span>
            <h2 style = {h2}>Rental</h2>
          </span>
        </div>

        <div style = {style}>
          <img src={clients} alt="clients" />
          <span>
            <h2 style = {h2}>Clients</h2>
          </span>
        </div>

        <div style = {greenActive}>
          <div style = {style}>
            <img src={dashboard} alt="dashboard" />
            <span>
              <h2 style = {h2}>Inventory</h2>
            </span>
          </div>
        </div>

        <div style = {style}>
          <img src={freight} alt="freight" />
          <span>
            <h2 style = {h2}>Freight</h2>
          </span>
        </div>

        <div style = {style}>
          <img src={financials} alt="financials" />
          <span>
            <h2 style = {h2}>Financial</h2>
          </span>
        </div>

        <div style = {style}>
          <img src={financials} alt="financials" />
          <span>
            <h2 style = {h2}>Calender</h2>
          </span>
        </div>

        <div style = {style}>
          <img src={pos} alt="pos" />
          <span>
            <h2 style = {h2}>POS</h2>
          </span>
        </div>

        <div style = {style}>
          <img src={administration} alt="administration" />
          <span>
            <h2 style = {h2}>Administration</h2>
          </span>
        </div>    
      </PanelBar>
    </div>
  )
}

export default Sidebar
