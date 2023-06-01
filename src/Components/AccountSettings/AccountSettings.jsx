import React from 'react'
import css from "./AccountSettings.module.css"
import Bell  from "../../assets/Notification.svg"
import Settings  from "../../assets/settings.svg"
import Profile from "../../assets/prfl.png"

const AccountSettings = () => {
  return (
    <div className={css.container}>

<div className={css.div1}>
            <div className={css.div1left}> 
            <h2>Account settings</h2></div>
            <div className={css.div1right}>
               <img src={Bell} alt="" />
               <img src={Settings} alt="" />
               <img src={Settings} alt="" />
               <span>Profile Name</span>
            </div>
        </div>


      
      

<div className={css.div3}>
    <div className={css.top3}>

        <div className={css.top3left}>

            <div className={css.t1}>
            <h4>Change Profile</h4> 
            <span>Change your profile picture from here</span>
                 </div>

            <div className={css.t2}> 
             <img src={Profile} alt="" />
             <div className={css.btns}>
                <button className={css.uploadb}>Upload</button>
                <button className={css.resetb}>Remove</button>
             </div>
            </div>

            <div className={css.t3}> 
            <span>Allowed JPG or Png, Max size of 800KB</span>
            </div>
           
        </div>

        <div className={css.top3right}>
            <h4>Change Password</h4> <br />
         
        <div className={css.password}>  
            <span>Current Password</span>
              <input className={css.logininput} type="password" />
            </div>
        <div className={css.password}>  
            <span>New Password</span>
              <input className={css.logininput} type="password" />
            </div>
            <div className={css.password}>
                <span>Confirm Password</span> 
                 <input className={css.logininput} type="password" />
                </div>

                <div className={css.change}>
                <button className={css.changebutton}>Change</button>
                <span>Forgot password?</span>
            </div>
        
        </div>
    </div>
    <div className={css.bottom3}>
        <h4>Personal Details</h4>
        <span>To change your personal details, edit and save from here</span>

        <div className={css.sline}>
        <div className={css.password}>  
            <span>Your name</span>
              <input className={css.logininput} type="text" />
            </div>
        <div className={css.password}>  
            <span>Designation</span>
              <input className={css.logininput} type="text" />
            </div>

        </div>
        <div className={css.sline}>
        <div className={css.password}>  
            <span>Email</span>
              <input className={css.logininput} type="text" />
            </div>
        <div className={css.password}>  
            <span>Phone Number</span>
              <input className={css.logininput} type="text" />
            </div>

        </div>
        <div className={css.btns2}>
                <button className={css.saveb}>Save</button>
                <button className={css.cancelb}>Cancel</button>
             </div>
        
        
    </div>
</div>

    </div>
  )
}

export default AccountSettings
