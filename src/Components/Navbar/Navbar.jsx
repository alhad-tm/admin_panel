import React from "react";
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";
// import User from "../../assets/users.svg"
// import Message from "../../assets/messages-question.svg"
// import Registration from "../../assets/registration.svg"
import Invicious from "../../assets/inviciousname.svg";
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"
// import Logo from "../../assets/Logo 1.svg"

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <div>
          <img src={Invicious} alt="" />
        </div>

     <div className={css.tab}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_56_1183)">
<path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_56_1183">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


          <span>Dashboard</span>
        </div>
    


        <Link to ="/">         <div className={css.tab}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_93_175)">
<path d="M7.5 13C6.60998 13 5.73995 12.7361 4.99993 12.2416C4.25991 11.7472 3.68314 11.0443 3.34254 10.2221C3.00195 9.39981 2.91283 8.49501 3.08647 7.6221C3.2601 6.74918 3.68868 5.94736 4.31802 5.31802C4.94736 4.68869 5.74918 4.2601 6.62209 4.08647C7.49501 3.91284 8.39981 4.00195 9.22208 4.34254C10.0443 4.68314 10.7471 5.25992 11.2416 5.99994C11.7361 6.73996 12 7.60999 12 8.5C11.9987 9.69307 11.5241 10.8369 10.6805 11.6805C9.83689 12.5241 8.69307 12.9987 7.5 13ZM7.5 6C7.00555 6 6.5222 6.14663 6.11107 6.42133C5.69995 6.69603 5.37952 7.08648 5.1903 7.54329C5.00108 8.00011 4.95157 8.50278 5.04804 8.98773C5.1445 9.47268 5.3826 9.91814 5.73223 10.2678C6.08186 10.6174 6.52732 10.8555 7.01227 10.952C7.49723 11.0484 7.99989 10.9989 8.45671 10.8097C8.91352 10.6205 9.30397 10.3001 9.57867 9.88893C9.85338 9.47781 10 8.99446 10 8.5C10 7.83696 9.73661 7.20108 9.26777 6.73224C8.79893 6.26339 8.16304 6 7.5 6ZM15 23V22.5C15 20.5109 14.2098 18.6032 12.8033 17.1967C11.3968 15.7902 9.48912 15 7.5 15C5.51088 15 3.60322 15.7902 2.1967 17.1967C0.790176 18.6032 0 20.5109 0 22.5L0 23C0 23.2652 0.105357 23.5196 0.292893 23.7071C0.48043 23.8946 0.734784 24 1 24C1.26522 24 1.51957 23.8946 1.70711 23.7071C1.89464 23.5196 2 23.2652 2 23V22.5C2 21.0413 2.57946 19.6424 3.61091 18.6109C4.64236 17.5795 6.04131 17 7.5 17C8.95869 17 10.3576 17.5795 11.3891 18.6109C12.4205 19.6424 13 21.0413 13 22.5V23C13 23.2652 13.1054 23.5196 13.2929 23.7071C13.4804 23.8946 13.7348 24 14 24C14.2652 24 14.5196 23.8946 14.7071 23.7071C14.8946 23.5196 15 23.2652 15 23ZM24 18C24 16.6487 23.6088 15.3263 22.8737 14.1924C22.1386 13.0585 21.091 12.1616 19.8574 11.61C18.6238 11.0584 17.2569 10.8756 15.9218 11.0837C14.5866 11.2919 13.3402 11.8821 12.333 12.783C12.2338 12.8702 12.1528 12.9762 12.0948 13.0949C12.0367 13.2135 12.0028 13.3425 11.9949 13.4744C11.987 13.6063 12.0053 13.7384 12.0487 13.8631C12.0922 13.9879 12.1599 14.1028 12.2481 14.2012C12.3362 14.2996 12.4429 14.3796 12.5621 14.4366C12.6813 14.4935 12.8106 14.5262 12.9426 14.5329C13.0745 14.5396 13.2064 14.5201 13.3308 14.4754C13.4551 14.4308 13.5694 14.362 13.667 14.273C14.3865 13.6296 15.2767 13.2082 16.2304 13.0597C17.1841 12.9111 18.1604 13.0417 19.0414 13.4358C19.9225 13.8299 20.6706 14.4705 21.1956 15.2804C21.7206 16.0903 22 17.0348 22 18C22 18.2652 22.1054 18.5196 22.2929 18.7071C22.4804 18.8946 22.7348 19 23 19C23.2652 19 23.5196 18.8946 23.7071 18.7071C23.8946 18.5196 24 18.2652 24 18ZM17.5 9C16.61 9 15.74 8.73608 14.9999 8.24162C14.2599 7.74715 13.6831 7.04435 13.3425 6.22208C13.0019 5.39981 12.9128 4.49501 13.0865 3.6221C13.2601 2.74918 13.6887 1.94736 14.318 1.31802C14.9474 0.688685 15.7492 0.260102 16.6221 0.0864683C17.495 -0.0871652 18.3998 0.00194979 19.2221 0.342544C20.0443 0.683139 20.7471 1.25991 21.2416 1.99994C21.7361 2.73996 22 3.60999 22 4.5C21.9987 5.69307 21.5241 6.83689 20.6805 7.68052C19.8369 8.52415 18.6931 8.99868 17.5 9ZM17.5 2C17.0055 2 16.5222 2.14662 16.1111 2.42133C15.7 2.69603 15.3795 3.08648 15.1903 3.54329C15.0011 4.00011 14.9516 4.50278 15.048 4.98773C15.1445 5.47268 15.3826 5.91814 15.7322 6.26777C16.0819 6.6174 16.5273 6.8555 17.0123 6.95197C17.4972 7.04843 17.9999 6.99892 18.4567 6.8097C18.9135 6.62048 19.304 6.30005 19.5787 5.88893C19.8534 5.47781 20 4.99446 20 4.5C20 3.83696 19.7366 3.20108 19.2678 2.73224C18.7989 2.26339 18.163 2 17.5 2Z" fill="#505050"/>
</g>
<defs>
<clipPath id="clip0_93_175">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

 

          <span>User Management</span>
        </div>   </Link> 
  <Link to ="/view">     <div className={css.tab}>
          
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_93_177)">
<path d="M10 10C9.20435 10 8.44129 10.3161 7.87868 10.8787C7.31607 11.4413 7 12.2044 7 13C7 13.7957 7.31607 14.5587 7.87868 15.1213C8.44129 15.6839 9.20435 16 10 16H14C14.7956 16 15.5587 15.6839 16.1213 15.1213C16.6839 14.5587 17 13.7957 17 13C17 12.2044 16.6839 11.4413 16.1213 10.8787C15.5587 10.3161 14.7956 10 14 10H10ZM15 13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8947 14.2652 14 14 14H10C9.73478 14 9.48043 13.8947 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13C9 12.7348 9.10536 12.4804 9.29289 12.2929C9.48043 12.1054 9.73478 12 10 12H14C14.2652 12 14.5196 12.1054 14.7071 12.2929C14.8946 12.4804 15 12.7348 15 13ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8947 16.2652 20 16 20H8C7.73478 20 7.48043 19.8947 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19C7 18.7348 7.10536 18.4804 7.29289 18.2929C7.48043 18.1054 7.73478 18 8 18H16C16.2652 18 16.5196 18.1054 16.7071 18.2929C16.8946 18.4804 17 18.7348 17 19ZM19.536 3.12102L17.878 1.46502C17.4149 0.999267 16.864 0.629977 16.2572 0.378513C15.6504 0.127049 14.9998 -0.00159798 14.343 1.49812e-05H8C6.6744 0.00160284 5.40356 0.528897 4.46622 1.46624C3.52888 2.40357 3.00159 3.67442 3 5.00002V19C3.00159 20.3256 3.52888 21.5965 4.46622 22.5338C5.40356 23.4711 6.6744 23.9984 8 24H16C17.3256 23.9984 18.5964 23.4711 19.5338 22.5338C20.4711 21.5965 20.9984 20.3256 21 19V6.65702C21.0019 6.0001 20.8735 5.34934 20.6222 4.74238C20.3709 4.13543 20.0017 3.58435 19.536 3.12102ZM18.122 4.53502C18.2627 4.67744 18.3893 4.83317 18.5 5.00002H16V2.50002C16.1671 2.60954 16.3226 2.73587 16.464 2.87702L18.122 4.53502ZM19 19C19 19.7957 18.6839 20.5587 18.1213 21.1213C17.5587 21.6839 16.7956 22 16 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.31607 20.5587 5 19.7957 5 19V5.00002C5 4.20437 5.31607 3.4413 5.87868 2.8787C6.44129 2.31609 7.20435 2.00002 8 2.00002H14V5.00002C14 5.53045 14.2107 6.03916 14.5858 6.41423C14.9609 6.7893 15.4696 7.00002 16 7.00002H19V19Z" fill="#505050"/>
</g>
<defs>
<clipPath id="clip0_93_177">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


          <span>Registration</span>
        </div>  </Link> 
        
        <div className={css.tab}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_93_179)">
<path d="M19 4H17.899C17.434 1.721 15.414 0 13 0H5C2.243 0 0 2.243 0 5V17.854C0 18.648 0.435 19.374 1.134 19.748C1.452 19.919 1.801 20.003 2.149 20.003C2.565 20.003 2.98 19.882 3.339 19.643L6.289 17.676C6.98 19.611 8.83 21 11 21H16.697L20.661 23.644C21.02 23.883 21.435 24.004 21.851 24.004C22.199 24.004 22.547 23.919 22.866 23.748C23.565 23.373 24 22.647 24 21.854V9C24 6.243 21.757 4 19 4ZM2.23 17.979C2.211 17.991 2.156 18.027 2.078 17.986C1.999 17.944 1.999 17.877 1.999 17.855V5C1.999 3.346 3.345 2 4.999 2H12.999C14.653 2 15.999 3.346 15.999 5V12C15.999 13.654 14.653 15 12.999 15H6.999C6.693 15 6.458 15.159 6.434 15.175L2.23 17.979ZM22 21.855C22 21.876 22 21.944 21.922 21.986C21.842 22.029 21.788 21.992 21.77 21.979L17.555 19.168C17.391 19.059 17.198 19 17 19H11C9.696 19 8.585 18.164 8.172 17H13C15.757 17 18 14.757 18 12V6H19C20.654 6 22 7.346 22 9V21.855ZM6 7C6 6.111 6.391 5.273 7.072 4.701C7.753 4.129 8.649 3.887 9.535 4.048C10.744 4.259 11.739 5.253 11.952 6.465C12.175 7.737 11.57 9.008 10.446 9.629C9.999 9.875 9.999 9.947 9.999 10C9.999 10.553 9.551 11 8.999 11C8.447 11 7.999 10.553 7.999 10C7.999 8.692 9.037 8.121 9.48 7.877C9.77 7.718 10.075 7.342 9.982 6.811C9.913 6.419 9.58 6.086 9.189 6.018C8.883 5.962 8.587 6.04 8.357 6.234C8.129 6.424 7.999 6.704 7.999 7.001C7.999 7.554 7.551 8.001 6.999 8.001C6.447 8.001 5.999 7.554 5.999 7.001L6 7ZM10 13C10 13.552 9.552 14 9 14C8.448 14 8 13.552 8 13C8 12.448 8.448 12 9 12C9.552 12 10 12.448 10 13Z" fill="#505050"/>
</g>
<defs>
<clipPath id="clip0_93_179">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


          <span>Chat</span>
        </div>
      
      </div>

      <div className={css.bottom}>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Navbar;
