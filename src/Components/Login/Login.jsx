import React from 'react'
import css from "./Login.module.css"
import Logo from "../../assets/Logo 1.svg"
import Google from "../../assets/Google logo.svg"
const Login = () => {
  return (
    <div className={css.container}>
        <div className={css.left}>
            <div className={css.logodiv}>
                <img className={css.logo} src={Logo} alt="" />
            </div>
        </div>
        <div className={css.right}>
            <div className={css.top}>
                <p>WELCOME TO INVICIOUS</p>
                <p>Invicious Admin 1</p>
                <button className={css.gbutton}>
                    <img className={css.gimage} src={Google} alt="" /> &nbsp; &nbsp;
                        <span className={css.span1}>Sign in with Google</span>
                </button>
                <p>-----or-----</p>
            </div>




            <div className={css.bottom}>
                <div className={css.email}>  
                <span>E-mail</span>
                  <input className={css.logininput} type="email" />
                </div>

                <div className={css.password}>
                <span>Password</span> 
                 <input className={css.logininput} type="email" />
                </div>

                <div className={css.third}>
                    <span> <input type="checkbox" /> Remember me</span>
                    <span> Forgot Password?</span>
                </div>

                <div className={css.forth}>
                    <button className={css.signin}>Sign in</button>
                </div>
         
       

            </div>

        </div>
      
    </div>
  )
}

export default Login
