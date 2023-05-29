import React from 'react'
import css from "./ViewDetails.module.css"

const ViewDetails = () => {
  return (
    <div className={css.container}>

        <div className={css.top}>
           <div className={css.tl}> <span>Name</span></div>
           <div className={css.tr}>
            <span> "left"  </span>
            <span> "right" </span>
            <button>Edit</button>
            <button>X</button>
           </div>

        </div>



        <div className={css.bottom}>
            <div className={css.bleft}>
            {/* form1 */}
          <div className={css.b1}> 
          <h5>Registration form Details</h5>

          <form action="" className={css.firstform}>
         <div className={css.formtop}>
            <div className={css.line}>
            <label htmlFor="">Name</label>
            <input type="text" />
            </div>
           <div className={css.line}>
           <label htmlFor="">Type of Organisation</label>
            <input type="text" />
           </div>
           
         </div>
         <div className={css.formbottom}>
         <div className={css.line}>
            <label htmlFor="">Contact number</label>
            <input type="text" />
            </div>
            <div className={css.line}>
            <label htmlFor="">Emal id</label>
            <input type="email" />
            </div>
         </div>


          </form>

          </div>   
          {/* form1 */}




{/* form2 */}
<div className={css.b2}> 
          <h5>Documentation details</h5>

          <h6>Theatre Information:</h6>

          <form action="" >
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


          </form>

          </div>

{/* form2 */}
</div>


          <div className={css.bright}>
            <h6>Status</h6>

 <ul>
    <li>onboarded</li>
    <li>credentials provided</li>
    <li>documentation verified(manual)</li>
    <li>documentation received</li>
    <li>documentation sent</li>
    <li>edited</li>
    <li>registered</li>
 </ul>
          </div>

        </div>
     
    </div>
  )
}

export default ViewDetails
