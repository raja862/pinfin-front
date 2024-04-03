
import './App.css';
import Header from './Header';
// import Footer from './Footer';
import UpdateEmployee from './UpdateEmployee';
import EmployeesList from './EmployeesList';
import AddEmployee from './AddEmployee';
import Contact from './Contact/Contact';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App(){

  return(<>
  <BrowserRouter>
  
  <Header/>

  <Routes>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/' element={<EmployeesList/>}/>
  <Route path='/employee/add' element={<AddEmployee/>}/>
  <Route path='/employees/:empID/update' element={<UpdateEmployee/>}/>
  </Routes>
  {/* <Footer/> */}
  </BrowserRouter>
  
  
  </>)
}
export default App;
