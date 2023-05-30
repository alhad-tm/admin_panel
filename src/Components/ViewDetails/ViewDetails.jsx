import React, { useState } from 'react'
import css from "./ViewDetails.module.css"
import Curight  from "../../assets/curvearrowleft.svg"
import Culeft  from "../../assets/curvearrowright.svg"
import Close  from "../../assets/closecross.svg"


const ViewDetails = () => {
   const [state,setState]=useState(0)
  return (
    <div className={css.container}>

        <div className={css.top}>
           <div className={css.tl}> <span>Name</span></div>
           <div className={css.tr}>
           <img src={Culeft} alt="" />
           <img src={Curight} alt="" />
           
            <button className={css.editb}>Edit</button>
            <img src={Close} alt="" />
           </div>

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
<div className={css.b2}> 
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

          </div>

{/* form2 */}
</div>

{/* right side */}
          <div className={css.bright}>
            <h6>Status</h6>
            <div className={css.uldiv}> 
            <ul className={css.timelinelist}>
            {state>=6 &&  <li>Onboarded</li>} 
  {state>=5 &&  <li>Credentail provided</li>} 
  {state>=4 &&  <li>Documentation verified(manual) </li>} 
  {state>=3 &&  <li>Documentation received</li>} 
  { state>=2 &&  <li>Documentation sent</li>} 
  
  {state>=1 && <li>Registered</li>}  
   

 </ul>
             </div>

<div className={css.buttondiv}>
<button>Decline</button>
 <button onClick={()=>setState(state+1)}>Sent Documentation URL</button>
</div>




 
          </div>

        </div>
     
    </div>
  )
}

export default ViewDetails
