import React from 'react'
import { Link,NavLink} from "react-router-dom";
import css from "./Registration.module.css"
import Bell  from "../../assets/Notification.svg"
import Settings  from "../../assets/settings.svg"
import Vector  from "../../assets/Vector.svg"
import Filter  from "../../assets/Frame 239.svg"
import Search  from "../../assets/search.svg"
import Down  from "../../assets/chevron-down.svg"
import Left  from "../../assets/chevron-left.svg"
import Right  from "../../assets/chevron-right.svg"
import Chat  from "../../assets/icons2/Chat n1.svg"
const Registration = () => {
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
        <div className={css.div2left}>
         
           <img src={Search} alt="" />   <input className={css.sinput} type="text"  placeholder='search...'/>
        </div>

        <div className={css.div2right}>
           <div className={css.r0}>
              <span>View Analytics</span> <img src={Vector} alt="" />
           </div>
           <div className={css.r1}>
              <span>Sort by</span> <img src={Down} alt="" />
           </div>

           <div className={css.r2}>
           <span>Filter</span> <img src={Filter} alt="" />
           {/* <label htmlFor="">Filter</label>
           <select name="" id="">
            <option value="">by</option>
            <option value="">age</option>
            <option value="">number</option>
           </select> */}
           </div>


           <div className={css.r3}>
              <img src={Left} alt="" />
              <span>1-50</span>
              <img src={Right} alt="" />
           </div>


        </div>
    </div>

    <div className={css.div3}>

        {/* table */}
    <table className={css.table1}  >
      <thead>
      <tr  className={css.thead}>
        <td>Sl.No:</td>
        <td>Name</td>
        <td>Date of reg</td>
        <td>Type of organisation</td>  
        <td>Status</td>
        <td>Details</td>
     </tr> 
      </thead>
      <tbody>
    
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
   <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>    
       
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatrizcccccccc</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     <tr>
        <td>01</td>
        <td>Beatriz</td>
        <td>01-01-2020</td>
        <td>Audio Streaming platform</td>
        <td>Onboarded</td>
        <Link to="/view">  <td>  <button className={css.vd}> View Details</button>  </td>   </Link>   
     </tr>
     </tbody>
     
   
  </table>

  {/* table^ */}
    </div>

    <div className={css.div4}>
     <ul className={css.numbers}>
        <img src={Left} alt="" />
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <img src={Right} alt="" />
     </ul>
    </div>
  
</div>
  )
}

export default Registration
