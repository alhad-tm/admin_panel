import React from 'react'
import css from "./Filter.module.css"

const Filter = () => {
  return (
    <div className={css.container}>
       <label htmlFor="organisationType">By Type of Organisation</label>
        <select name='select' multipleclassName={css.multiple}
          id="organisationType"
          required
        >
          <option value="">Select Type</option>
          <option value="Audio streaming platform">Audio streaming platform</option>
          <option value="Distribution Company">Distribution Company</option>
          <option value="Multiplex">Multiplex</option>
          <option value="OTT streaming platform">OTT streaming platform</option>
          <option value="Producer">Producer</option>
          <option value="Production House">Production House</option>
          <option value="Single Screen Cinema">Single Screen Cinema</option>
       <option value="">  <label htmlFor="">hello</label>  <input type="checkbox" name="" id="" /></option>  
         
        </select>
    </div>
  )
}

export default Filter





// import  {React, Component } from "react";
// import ReactDOM from "react-dom";
// import { colourOptions } from "../colourOptions";
// import { default as ReactSelect } from "react-select";
// import "./styles.css";

// import { components } from "react-select";

// const Option = (props) => {
//   return (
//     <div>
//       <components.Option {...props}>
//         <input
//           type="checkbox"
//           checked={props.isSelected}
//           onChange={() => null}
//         />{" "}
//         <label>{props.label}</label>
//       </components.Option>
//     </div>
//   );
// };

// export default class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       optionSelected: null
//     };
//   }  

//   handleChange = (selected) => {
//     this.setState({
//       optionSelected: selected
//     });
//   };

//   render() {
//     return (
//       <span
//         class="d-inline-block"
//         data-toggle="popover"
//         data-trigger="focus"
//         data-content="Please selecet account(s)"
//       >
//         <ReactSelect
//           options={colourOptions}
//           isMulti
//           closeMenuOnSelect={false}
//           hideSelectedOptions={false}
//           components={{
//             Option
//           }}
//           onChange={this.handleChange}
//           allowSelectAll={true}
//           value={this.state.optionSelected}
//         />
//       </span>
//     );
//   }
// }

