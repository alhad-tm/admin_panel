import React from 'react'
import css from "./Forgotpassword.module.css"
import Logo from "../../assets/Logo 1.svg" 

const Forgotpassword = () => {
  return (
    <div className={css.container}>
    <div className={css.left}>
        <div className={css.logodiv}>
            <img className={css.logo} src={Logo} alt="" />
        </div>
    </div>
    <div className={css.right}>
        <div className={css.top}>
            <p>Forgot Password</p>
            <p>Please provide the registered email address to receive the reset password link.</p>
           
        </div>




        <div className={css.bottom}>
            <div className={css.email}>  
            <span>E-mail</span>
              <input className={css.logininput} type="email" />
            </div>

            

            <div className={css.forth}>
                <button className={css.signin}>Sign in</button>
            </div>
            <div className={css.fifth}>
              <span>Back to login</span>
            </div>
     
   

        </div>

    </div>
  
</div>
  )
}

export default Forgotpassword
