// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chat from './Components/Chat/Chat';
import AccountSettings from './Components/AccountSettings/AccountSettings';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import Login from './Components/Login/Login';
import Forgotpassword from './Components/ForgotPassword/Forgotpassword';
import Resetpassword from './Components/ResetPassword/Resetpassword';
import Navbar from './Components/Navbar/Navbar';
import Requestmodifiction from './Components/Requestmodification/Requestmodifiction';
import UsersManagement from './Components/UsersManagement/UsersManagement';
import Notification from './Components/Notification/Notification';
import Registration from './Components/Registration/Registration';
import Notifypop from './Components/Notifypopup/Notifypop';
import Decline from './Components/Decline/Decline';
import Dashboard from './Components/Dashboard/Dashboard';
import Filter from './Components/Filter/Filter';
import FilterDropdown from './Components/FilterDropdown/FilterDropdown';
import ViewDetailsUser from './Components/ViewDetailsUser/ViewDetailsUser';


function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>

        <Routes>
          
        <Route path="/" exact element={<UsersManagement />} />
        <Route path="/view"  element={ <ViewDetails/>} />
        <Route path="/viewuser"  element={ <ViewDetailsUser/>} />
        <Route path="/notification"  element={ <Notification/>} />
        <Route path="/notifypopup"  element={ <Notifypop/>} />
        <Route path="/ac"  element={  <AccountSettings/>} />
        <Route path="/req"  element={ <Requestmodifiction/>} />
        <Route path="/decline"  element={ <Decline/>} />
        <Route path="/dash"  element={ <Dashboard/>} />
        <Route path="/chat"  element={<Chat/>} />
        <Route path="/login"  element={<Login />} />
        <Route path="/fpassword"  element={<Forgotpassword/>} />
        <Route path="/rpassword"  element={<Resetpassword/>} />
        <Route path="/reg"  element={<Registration/>} />
      

        <Route path="/filter"  element={<FilterDropdown/>} />
      
            
          
          </Routes>  
        
        
        
        
          </Router>
     
    
     

    
    

    
    
   
    

     
    </div>
  );
}

export default App;
 