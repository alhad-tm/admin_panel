import React from 'react'
import "./FilterDropdown.css"

const FilterDropdown = () => {
  return (
    <div>
      
      <form className='fill'>
        <select name="select" multiple className='multiselect'  multiselect-search="true">
            <option value="">Audio streaming platform</option>
            <option value="">Distribution company</option>
            <option value="">Multiplex</option>
            <option value="">Ott Streaming platform</option>
            <option value="">Producer</option>
            <option value="">Production house</option>
        </select>
      </form>
    </div>
  )
}

export default FilterDropdown
