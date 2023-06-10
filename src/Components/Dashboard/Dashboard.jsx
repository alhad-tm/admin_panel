import React from 'react'
import css from "./Dashboard.module.css"
import Bell  from "../../assets/Notification.svg"
import Profile  from "../../assets/prfl.png"
import Settings  from "../../assets/settings.svg"
import D1  from "../../assets/newusersd1.svg"
import D2  from "../../assets/totalusersd2.svg"
import D3  from "../../assets/registrationd3.svg"
import D4  from "../../assets/pendingreqd4.svg"


const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
            
            <div className={css.div1right}>
               <img src={Bell} alt="" />
               <img src={Bell} alt="" />
               <img src={Settings} alt="" />
              <div className={css.prfl}>
              <img src={Profile} alt="" />
               <span>Profile Name</span>
                 </div>
              
            </div>
        </div>


<div className={css.div2}>
    
    <div className={css.div2top}>

<div className={css.div2topleft}> Overview</div>
<div className={css.div2topright}>
    <span>Today</span>
    <span>7d</span>
    <span>2w</span>
    <span>1m</span>
    <span>3m</span>
    <span>1y</span>
    <button className={css.alltime}>All time</button>
</div>

    </div>



    <div className={css.div2bottom}>
        <div className={css.sbox}>
          <div className={css.sboxleft}>
            <span>New users</span>
            <span>1650</span>
          </div>
          <div className={css.sboxright}>
           <img src={D1} alt="" />
          </div>

        </div>
        <div className={css.sbox}>
          <div className={css.sboxleft}>
            <span>Total Users</span>
            <span>16530</span>
          </div>
          <div className={css.sboxright}>
           <img src={D2} alt="" />
          </div>

        </div>
        <div className={css.sbox}>
          <div className={css.sboxleft}>
            <span>Registrations</span>
            <span>6014</span>
          </div>
          <div className={css.sboxright}>
           <img src={D3} alt="" />
          </div>

        </div>
        <div className={css.sbox}>
          <div className={css.sboxleft}>
            <span>Pending request</span>
            <span>814</span>
          </div>
          <div className={css.sboxright}>
           <img src={D4} alt="" />
          </div>

        </div>
       
    </div>


</div>

    </div>
  )
}

export default Dashboard
