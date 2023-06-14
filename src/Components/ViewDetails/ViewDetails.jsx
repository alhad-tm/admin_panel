import React, { useState } from 'react'
import css from "./ViewDetails.module.css"
import Curight  from "../../assets/curvearrowleft.svg"
import Culeft  from "../../assets/curvearrowright.svg"
import Close  from "../../assets/closecross.svg"
import Bell  from "../../assets/Notification.svg"
import Settings  from "../../assets/settings.svg"
import Lef from "../../assets/icons2/arrow-left n1.svg"
import { NavLink } from 'react-router-dom'


const ViewDetails = () => {
   const [state,setState]=useState(0)
  return (
    <div className={css.container}>

<div className={css.div1}>
        <div className={css.div1left}> 
        <h2>Registration</h2></div>
        <div className={css.div1right}>
        {/* <img src={Chat} alt="" /> */}
    <NavLink to="/chat">   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="white"/>
<path d="M29.0005 24.5C29.2766 24.5 29.5005 24.2761 29.5005 24C29.5005 23.7239 29.2766 23.5 29.0005 23.5C28.7244 23.5 28.5005 23.7239 28.5005 24C28.5005 24.2761 28.7244 24.5 29.0005 24.5Z" fill="#323232" stroke="#323232" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0005 24.5C24.2766 24.5 24.5005 24.2761 24.5005 24C24.5005 23.7239 24.2766 23.5 24.0005 23.5C23.7244 23.5 23.5005 23.7239 23.5005 24C23.5005 24.2761 23.7244 24.5 24.0005 24.5Z" fill="#323232" stroke="#323232" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0005 24.5C19.2766 24.5 19.5005 24.2761 19.5005 24C19.5005 23.7239 19.2766 23.5 19.0005 23.5C18.7243 23.5 18.5005 23.7239 18.5005 24C18.5005 24.2761 18.7243 24.5 19.0005 24.5Z" fill="#323232" stroke="#323232" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4771 29.5228 14 24 14C18.4771 14 14 18.4771 14 24C14 25.8214 14.487 27.5291 15.3378 29L14.5 33.5L19 32.6622C20.4709 33.513 22.1786 34 24 34Z" stroke="#323232" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg></NavLink> 

           <img src={Bell} alt="" />
           <img src={Settings} alt="" />
           <span>Profile Name</span>
        </div>
    </div>

    <div className={css.div2}>
      <div className={css.lef}>
         <img src={Lef} alt="" />
         <span>Name of the registerd person</span>
      </div>
      <div className={css.rig}><button className={css.editb}>Edit</button></div>
    </div>



        <div className={css.bottom}>
            <div className={css.bleft}>
            {/* form1 */}
          <div className={css.b1}> 
          <h5>Registration form Details</h5>

          <form action="" className={css.firstform}>
         <div className={css.formtop}>

            <div className={css.linecontent}>
            <div className={css.line}>
            <label htmlFor="">Name</label>
            <input type="text" />
            </div>
           <div className={css.line}>
           <label htmlFor="">Type of Organisation</label>
            <input type="text" />
           </div>
            </div>
           
           
         </div>
         <div className={css.formbottom}>
            <div className={css.linecontent}>
            <div className={css.line}>
            <label htmlFor="">Contact number</label>
            <input type="text" />
            </div>
            <div className={css.line}>
            <label htmlFor="">Emal id</label>
            <input type="email" />
            </div>

            </div>
        
         </div>


          </form>

          </div>   
          {/* form1 */}

<hr />


{/* form2 */}
{ state >=3 && <div className={css.b2}> 
          <h5>Documentation details</h5>

          <h6>Theatre Information:</h6>

          <form action="" className={css.secondform} >
         <div className={css.formline1}>
            <label htmlFor="">Name of the theater</label>
            <input type="text" />
           
         </div>
         <div className={css.formline2}>
            <label htmlFor="">Address of the theatre</label>
            <input type="text" />
          
         </div>
        
         <div className={css.formline3}>
         <div className={css.line}>
            <label htmlFor="">City</label>
            <input type="text" />
            </div>
           
            <div className={css.line}>
            <label htmlFor="">State</label>
            <input type="text" />
            </div>
            <div className={css.line}>
            <label htmlFor="">Postal Code</label>
            <input type="text" />
            </div>
         </div>
         <div className={css.formline4}>
            <label htmlFor="">Number of screens</label>
            <input type="text" />
          
         </div>

         <div className={css.formline5}>
            <label htmlFor="">Tax identification number/ relevant registration number</label>
            <input type="text" />
          
         </div>
         <h6>Licensing and Certification</h6>
         <div className={css.formline5}>
            <label htmlFor="">Licenses and permits</label>
            <input type="file" />
          
         </div>
         <h6>Facilities and aminities</h6>
         <div className={css.formline5}>
            <label htmlFor="">Seating capacity of each screen</label>
            <input type="text" />
          
         </div>
         <div className={css.formline5}>
            <label htmlFor="">Projection and sound system details</label>
            <input type="text" />
          
         </div>
         <div className={css.formline5}>
            <label htmlFor="">Availability of 3D or IMAX Technology </label>
            <input type="text" />
          
         </div>
         <div className={css.formline5}>
            <label htmlFor="">Accessible seating or other accommodations for patrons with disabilities</label>
            <input type="text" />
          
         </div>
         <div className={css.formline5}>
            <label htmlFor="">Additional aminities</label>
            <input type="text" />
          
         </div>


          </form>

          </div> }

{/* form2 */}
</div>

{/* right side */}
          <div className={css.bright}>
            <h6>Status</h6>
            <div className={css.uldiv}> 
            <ul className={css.timelinelist}>
            {state>=6 &&  <div><li>Onboarded</li> <span style={{fontSize:"10px"}}>23-05-2023</span> </div>} 
  {state>=5 &&  <div><li>Credential provided</li> <span style={{fontSize:"10px"}}>23-05-2023</span> </div>} 
  {state>=4 &&  <div><li>Documentation verified(manual)</li> <span style={{fontSize:"10px"}}>23-05-2023</span> </div>} 
  {state>=3 &&  <div><li>Documentation received</li> <span style={{fontSize:"10px"}}>23-05-2023</span> </div>} 
  { state>=2 &&  <div><li>Documentation sent</li> <span style={{fontSize:"10px"}}>23-05-2023</span> </div> } 
  
   <div><li>Registered</li> <span style={{fontSize:"10px"}}>23-05-2023</span> </div> 
   

 </ul>
             </div>

<div className={css.buttondiv}>
<button className={css.declineb} onClick={()=>setState(state-1)}>Decline</button>
{state<2 && <button className={css.sentdocb} onClick={()=>setState(state+1)}>Sent Documentation URL</button>}
{state===2 && <button className={css.sentdocb} onClick={()=>setState(3)}>Resent Documentation URL</button>}
{state>=3&& <button className={css.declineb} onClick={()=>setState(4)}>Request for modification</button>}
{state>=3&& <button className={css.sentdocb} onClick={()=>setState(5)}>Verified</button>}
</div>




 
          </div>

        </div>
     
    </div>
  )
}

export default ViewDetails
