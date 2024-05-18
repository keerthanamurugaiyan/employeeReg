import Edit from './EmpolyeeReg/Components/Edit';
import Form from './EmpolyeeReg/Components/Form';
// import Nav from './EmpolyeeReg/Components/Nav';
import Spinner from './EmpolyeeReg/Components/Spinner';
import './EmpolyeeReg/Components/Style.css';
// import './index.css';
import Table from './EmpolyeeReg/Components/Table';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import MockApi from './EmpolyeeReg/Service/MockApi';
import Nav from "./EmpolyeeReg/Components/Nav"

function App() {
  return (
  
      <BrowserRouter>
      <Nav/>
    <Routes>

     <Route path='/'  element={<Form/>}    ></Route>
     <Route path='/regtable'  element={<Table/>}    ></Route>
     <Route path='/form/:id/edit' element={<Edit/>} ></Route>
     {/* <Route path='/' element={<Nav/>} ></Route> */}
     <Route path='/spinner'  element={<Spinner/>}    ></Route>

    </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
