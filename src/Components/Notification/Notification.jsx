import React from 'react'
import css from "./Notification.module.css"
import Bell  from "../../assets/Notification.svg"
import Settings  from "../../assets/settings.svg"
import Filter  from "../../assets/Frame 239.svg"
import Search  from "../../assets/search.svg"
import Down  from "../../assets/chevron-down.svg"
import Left  from "../../assets/chevron-left.svg"
import Right  from "../../assets/chevron-right.svg"
import Profile from "../../assets/prfl.png"
const Notification = () => {
  return (
    <div className={css.container}>
      

      <div className={css.div1}>
            <div className={css.div1left}> 
            <h2>Notification</h2></div>
            <div className={css.div1right}>
               <img src={Bell} alt="" />
               <img src={Settings} alt="" />
               <img src={Settings} alt="" />
               <span>Profile Name</span>
            </div>
        </div>


        <div className={css.div2}>
            <div className={css.div2left}>
             
               <img src={Search} alt="" />   <input className={css.sinput} type="text"  placeholder='search...'/>
            </div>

            <div className={css.div2right}>
               <div className={css.r1}>
                  <span>Sort by</span> <img src={Down} alt="" />
               </div>

               <div className={css.r2}>
               <span>Filter</span> <img src={Filter} alt="" />
               </div>

 
               <div className={css.r3}>
                  <img src={Left} alt="" />
                  <span>1-50</span>
                  <img src={Right} alt="" />
               </div>


            </div>
        </div>
{/* here */}
        <div className={css.div3}>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>
            <div className={css.notify}>
                    <div className={css.notifyleft}>
                        <img src={Profile} alt="" />
                        <span>Stephen-Submitted a registration form</span>
                     </div>

                     <div className={css.notifyright}>
                        <span>24 Nov 2023 at 9.30 AM</span>
                     </div>         
            </div>




        </div>


    </div>
  )
}

export default Notification
