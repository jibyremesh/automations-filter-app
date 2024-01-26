import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Filter.css';

/**
 * SelectChip component creates the singleselect chip 
 * in the filter section
 * 
 * @author Jiby Remesh
 * @version 1.0
 * @since 2024-01-23
 */

const SelectChip = ({ label, iconType, selectType, options, onSelect }) => {

  return (
    <div class="select-chip dropdown">
      <FontAwesomeIcon className='fa-sm mr-4' icon={iconType} />
      <span class="dropbtn">{label}</span>
      <div class="dropdown-content">
        {options.map((option) => (
          <div key={option} className="select-chip-option" onClick={() => onSelect(selectType, option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectChip;

