import React from 'react'
import css from "./Notifypop.module.css"
import Profile from "../../assets/prfl.png"

const Notifypop = () => {
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <h2>Notifications</h2>
            <button className={css.new}>5 new</button>
        </div>




        <div className={css.div2}>
         <img src={Profile} alt="" />
         <span>David submitted the registrtion form</span>
        </div>
        <div className={css.div2}>
         <img src={Profile} alt="" />
         <span>Sam onboarded sucessfully</span>
        </div>
        <div className={css.div2}>
         <img src={Profile} alt="" />
         <span>David submitted the registrtion form</span>
        </div>
        <div className={css.div2}>
         <img src={Profile} alt="" />
         <span>David submitted the registrtion form</span>
        </div>






        <div className={css.div3}>
            <button className={css.seeall}> See All Notifications</button>
        </div>
      
    </div>
  )
}

export default Notifypop
