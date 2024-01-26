import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../../styles/Filter.css';

/**
 * MultiSelectChip component creates the multiselect chip 
 * in the filter section
 * 
 * @author Jiby Remesh
 * @version 1.0
 * @since 2024-01-24
 */

const MultiSelectChip = ({ label, iconType, selectType, options, selectedOptions, onSelect }) => {

  const handleOptionClick = (option) => {
    const newSelectedOptions = [...selectedOptions];
    const optionIndex = newSelectedOptions.indexOf(option);

    if (optionIndex === -1) {
      newSelectedOptions.push(option);
    } else {
      newSelectedOptions.splice(optionIndex, 1);
    }
    onSelect(selectType, newSelectedOptions);
  };

  return (
    <div className="multiple-select-chip dropdown">
      <div className="dropdown-header">
        <FontAwesomeIcon className='fa-sm mr-4' icon={iconType} />
        <span className="dropdown-label">{label}</span>
        <div class="dropdown-content">
          {options.map((option) => (
            <div
              className='multiple-select-chip-option'
              onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      </div></div>
  );
}

export default MultiSelectChip;
