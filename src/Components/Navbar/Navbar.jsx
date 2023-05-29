import React from 'react'
import css from "./Navbar.module.css"
import User from "../../assets/users.svg"
import Message from "../../assets/messages-question.svg"
import Dashboard from "../../assets/dashboard.svg"
import Registration from "../../assets/registration.svg"
import Invicious from "../../assets/inviciousname.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
       
      <div>
      <img src={Invicious} alt="" /> 
      </div>

      <div className={css.tab}>  <img className={css.dash} src={Dashboard} alt="" /> <span>Dashboard</span></div>
      <div> <img src={User} alt="" /> <span>User management</span></div>
      <div> <img src={Registration} alt="" /> <span>Registration</span></div>
      <div> <img src={Message} alt="" /> <span>Chat</span></div>
    

      </div>


      <div className={css.bottom}>

       <span>Logout</span>
      </div>


     
    
    
    
    
    
     
    </div>
  )
}

export default Navbar
 