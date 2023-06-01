// import logo from './logo.svg';
import './App.css';
// import AccountSettings from './Components/AccountSettings/AccountSettings';
// import ViewDetails from './Components/ViewDetails/ViewDetails';
// import Login from './Components/Login/Login';
// import Forgotpassword from './Components/ForgotPassword/Forgotpassword';
// import Resetpassword from './Components/ResetPassword/Resetpassword';
import Navbar from './Components/Navbar/Navbar';
import Requestmodifiction from './Components/Requestmodification/Requestmodifiction';

// import UsersManagement from './Components/UsersManagement/UsersManagement';

// import Notification from './Components/Notification/Notification';

function App() {
  return (
    <div className="App">
     
     {/* <Login/> */} 
     {/* <Forgotpassword/> */}
     {/* <Resetpassword/> */} 
     

     <Navbar/>
     {/* <UsersManagement/> */}

     {/* <ViewDetails/> */}
     {/* <Notification/> */}
     {/* <AccountSettings/> */}
     <Requestmodifiction/>
    </div>
  );
}

export default App;
 