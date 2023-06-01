import React from 'react'
import css from "./Requestmodification.module.css"

const Requestmodifiction = () => {
  return (
    <div className={css.container}>

        <h4>Request for modification</h4>

        <div className={css.sline}>
        <div className={css.req}>  
            <span>Recipient email-id</span>
              <input className={css.logininput} type="text" />
            </div>
        <div className={css.req}>  
            <span>Recipient Contact number</span>
              <input className={css.logininput} type="text" />
            </div>
        <div className={css.req}>  
            <span>Message</span>
              <input className={css.textareainput} type="text" />
            </div>
            <button className={css.sbtn}>Send</button>

        </div>
     
    </div>
  )
}

export default Requestmodifiction
