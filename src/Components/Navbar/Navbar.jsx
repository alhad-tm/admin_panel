import React from "react";
import css from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
// import User from "../../assets/users.svg"
// import Message from "../../assets/messages-question.svg"
// import Registration from "../../assets/registration.svg"
import Invicious from "../../assets/inviciousname.svg";
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"


import { HiUsers } from "react-icons/hi";
import {MdSpaceDashboard} from "react-icons/md"
import {LuFileText} from "react-icons/lu"
import {BsChatDots} from "react-icons/bs"

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <div>
          <img src={Invicious} alt="" />
        </div>

   <NavLink to="/dash"> <div className={css.tab}>
   <MdSpaceDashboard size={30}/>


          <span>Dashboard</span>
        </div> </NavLink> 
    


        <NavLink className={css.nav} to ="/">         <div className={css.tab}>
     

 
<HiUsers size={30}/>
          <span  >User Management</span>
        </div>   </NavLink> 
  <NavLink to ="/reg">     <div className={css.tab}>
          
  <LuFileText size={30}/>




          <span>Registration</span>
        </div>  </NavLink> 
        

    <NavLink to="/chat">   <div className={css.tab}>
    <BsChatDots size={30}/>


          <span>Chat</span>
        </div>  </NavLink> 
      
      </div>

      <div className={css.bottom}>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Navbar;
