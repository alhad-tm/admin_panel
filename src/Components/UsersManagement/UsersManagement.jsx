import React from 'react'
import { Link} from "react-router-dom";
import css from "./UsersManagement.module.css"
import Bell  from "../../assets/Notification.svg"
import Settings  from "../../assets/settings.svg"
import Filter  from "../../assets/Frame 239.svg"
import Search  from "../../assets/search.svg"
import Down  from "../../assets/chevron-down.svg"
import Left  from "../../assets/chevron-left.svg"
import Right  from "../../assets/chevron-right.svg"

const UsersManagement = () => {
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <div className={css.div1left}> 
            <h2>Users Management</h2></div>
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

export default UsersManagement
