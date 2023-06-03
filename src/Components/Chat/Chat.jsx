import React from 'react'
import css from "./Chat.module.css"
import Left  from "../../assets/chevron-left.svg"
import Right  from "../../assets/chevron-right.svg"
import Filter  from "../../assets/Frame 239.svg"
import Search  from "../../assets/search.svg"
import Down  from "../../assets/chevron-down.svg"
import Bell  from "../../assets/Notification.svg"
import Settings  from "../../assets/settings.svg"
import Profile from "../../assets/prfl.png"
import Image from "../../assets/image.svg"
import Pin from "../../assets/paperclip.svg"
import Bars from "../../assets/bars.svg"
import Send from "../../assets/send.svg"
import Green from "../../assets/green.png"
const Chat = () => {
  return (
    <div className={css.container}>
        


        <div className={css.div1}>
            <div className={css.div1left}> 
            <h2>Chat</h2></div>
            <div className={css.div1right}>
               <img src={Bell} alt="" />
               <img src={Settings} alt="" />
               <img src={Settings} alt="" />
               <span>Profile Name</span>
            </div>
        </div>


        <div className={css.div2}>

            {/* <div className={css.div2left}>
             
               <img src={Search} alt="" />   <input className={css.sinput} type="text"  placeholder='search...'/>
            </div> */}

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

        {/* bottom */}

        <div className={css.div3}>
        {/* left */}
            <div className={css.div3left}>
                
            <div className={css.div3search}>
             
             <img src={Search} alt="" />   <input className={css.sinput} type="text"  placeholder='search...'/>
          </div>

          <div className={css.chatlist}>

        <div className={css.chatbox}>  
        <div className={css.chatboxleft}>
            <div className={css.profile}>
                <img src={Profile} alt="" />
            </div>
            <div className={css.cdetails}>
                <div>Park Jimin</div>
                <div>Gud mrng....</div>
               
            </div>
        </div>
        <div className={css.chatboxright}>
            2 days
        </div>
        </div>
       
        <div className={css.chatbox}>  
        <div className={css.chatboxleft}>
            <div className={css.profile}>
                <img src={Profile} alt="" />
            </div>
            <div className={css.cdetails}>
                <div>Park Jimin</div>
                <div>Whats the sta....</div>
            </div>
        </div>
        <div className={css.chatboxright}>
            2 days
        </div>
        </div>
       
        <div className={css.chatbox}>  
        <div className={css.chatboxleft}>
            <div className={css.profile}>
                <img src={Profile} alt="" />
            </div>
            <div className={css.cdetails}>
                <div>Park Jimin</div>
                <div>u there?..</div>
            </div>
        </div>
        <div className={css.chatboxright}>
            2 days
        </div>
        </div>
       
        <div className={css.chatbox}>  
        <div className={css.chatboxleft}>
            <div className={css.profile}>
                <img src={Profile} alt="" />
            </div>
            <div className={css.cdetails}>
                <div>Park Jimin</div>
                <div>description</div>
            </div>
        </div>
        <div className={css.chatboxright}>
            2 days
        </div>
        </div>
       
        <div className={css.chatbox}>  
        <div className={css.chatboxleft}>
            <div className={css.profile}>
                <img src={Profile} alt="" />
            </div>
            <div className={css.cdetails}>
                <div>Park Jimin</div>
                <div>description</div>
            </div>
        </div>
        <div className={css.chatboxright}>
            2 days
        </div>
        </div>
       


          </div>


                
            </div>





            {/* right */}
            <div className={css.div3right}>
                <div className={css.rtop}>

                <div className={css.rtopleft}>
                <div className={css.profile}>
                <img src={Profile} alt="" />
            </div>
            <div className={css.cdetails}>
                <div>Park Jimin</div>
                <div>Active Now</div>
               
            </div>
            <div><img style={{height:"10px",width:"10px",borderRadius:"50%"}} src={Green} alt="" /></div>
                </div>

                <div className={css.rtopright}>
                    <img src={Bars} alt="" />
                </div>

                </div>



                <div className={css.rmiddle}>
                  {/* chat content */}
                  <div className={css.chatleft}> hello how are you?..</div>
                  <div className={css.chatright}> <span> i am fine,whatsup </span>  </div>
                  <div className={css.chatleft}>going for a vacation</div>
                  <div className={css.chatright}>when will u come back?</div>
                </div>

                <div className={css.rbottom}>
                    <div className={css.rbottomleft}>
                       <span>Type a message</span>
                    </div>
                    <div className={css.rbottomright}>
                      <img src={Image} alt="" />
                      <img src={Pin} alt="" />
                      <img src={Send} alt="" />
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Chat

 