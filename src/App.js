import Form from './EmpolyeeReg/Components/Form';
import './App.css';
import Table from './EmpolyeeReg/Components/Table';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>

     {/* <Route path='/EmpolyeeRegform'  element={<Form/>}    ></Route> */}
     {/* <Route path='/EmpolyeeRegtable'  element={<Table/>}    ></Route> */}


    </Routes>
    
    </BrowserRouter>
     
      <Form/>
      <Table/>
    </div>
  );
}

export default App;
