import Form from './EmpolyeeReg/Components/Form';
import './EmpolyeeReg/Components/Style.css';
// import './index.css';
import Table from './EmpolyeeReg/Components/Table';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import MockApi from './EmpolyeeReg/Service/MockApi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>

     <Route path='/'  element={<Form/>}    ></Route>
     <Route path='/regtable'  element={<Table/>}    ></Route>


    </Routes>
    
    </BrowserRouter>
    {/* <Form/> */}
      {/* 
      <Table/> */}
      {/* <MockApi/> */}
    </div>
  );
}

export default App;
