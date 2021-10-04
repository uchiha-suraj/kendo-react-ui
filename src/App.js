import './App.css';
import CardUi from './CardUi';
import Table from './Table';
import TableOptions from './TableOptions';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className = 'app__body'>   
        <Sidebar />     
        <div className="top__part">
          <CardUi />
          <TableOptions />
        </div>
      </div>  
      <div className="table">
        <Table />
      </div>          
    </div>
  );
}

export default App;
