// import logo from './logo.svg';
import './App.css';
import ViewDetails from './Components/ViewDetails/ViewDetails';
// import Login from './Components/Login/Login';
// import Forgotpassword from './Components/ForgotPassword/Forgotpassword';
// import Resetpassword from './Components/ResetPassword/Resetpassword';
import Navbar from './Components/Navbar/Navbar';

import UsersManagement from './Components/UsersManagement/UsersManagement';

function App() {
  return (
    <div className="App">
     
     {/* <Login/> */} 
     {/* <Forgotpassword/> */}
     {/* <Resetpassword/> */}
     

     <Navbar/>
     {/* <UsersManagement/> */}

     <ViewDetails/>
    </div>
  );
}

export default App;
