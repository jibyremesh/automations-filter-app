import React, { useState, useEffect } from 'react';
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
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = React.createRef();

  const calculateDdPos = () => {
    if (dropdownRef.current) {
      const { top, left } = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({ top, left });
    }
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  useEffect(() => {
    calculateDdPos();
  }, [dropdownVisible]);

  return (
    <div className="select-chip dropdown" ref={dropdownRef}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <FontAwesomeIcon className='fa-sm mr-4' icon={iconType} />
      <span className="dropbtn">{label}</span>
      {dropdownVisible && (

        <div className="dropdown-content"
          style={{
            top: dropdownPosition.top + 32,
            left: dropdownPosition.left,
          }}
        >
          {options.map((option) => (
            <div key={option} className="select-chip-option" onClick={() => onSelect(selectType, option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectChip;

