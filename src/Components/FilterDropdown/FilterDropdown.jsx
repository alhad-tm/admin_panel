import React from 'react'
import "./FilterDropdown.css"

const FilterDropdown = () => {
  return (
    <div>
      <form>
        <select name="select" multiple className='multiselect'  multiselect-search="true">
            <option value="">newzeland</option>
            <option value="">india</option>
            <option value="">usa</option>
            <option value="">South Arica</option>
            <option value="">South Arica</option>
        </select>
      </form>
    </div>
  )
}

export default FilterDropdown
