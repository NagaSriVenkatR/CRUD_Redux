import './App.css';
import Form from './Components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Table from './Components/Table';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Form />} />
        <Route path='/table' element={<Table/>}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </Router>
    // <div className='App'>
    //   <Form />
    //   <Table/>
    // </div>
  );
}

export default App;
