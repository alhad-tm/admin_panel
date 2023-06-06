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

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>

        <Routes>
          
        <Route path="/" exact element={<UsersManagement />} />
        <Route path="/view"  element={ <ViewDetails/>} />
        <Route path="/notification"  element={ <Notification/>} />
        <Route path="/ac"  element={  <AccountSettings/>} />
        <Route path="/req"  element={ <Requestmodifiction/>} />
        <Route path="/chat"  element={<Chat/>} />
        <Route path="/login"  element={<Login />} />
        <Route path="/fpassword"  element={<Forgotpassword/>} />
        <Route path="/rpassword"  element={<Resetpassword/>} />
        <Route path="/reg"  element={<Registration/>} />
          
          
          </Routes>  
        
        
        
        
          </Router>
     
    
     

    
    

    
    
   
    

     
    </div>
  );
}

export default App;
 