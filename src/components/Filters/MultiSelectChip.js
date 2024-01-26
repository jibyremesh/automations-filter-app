import React ,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = React.createRef();

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
    <div className="multiple-select-chip dropdown" ref={dropdownRef}
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdown-header">
        <FontAwesomeIcon className='fa-sm mr-4' icon={iconType} />
        <span className="dropdown-label">{label}</span>
        {dropdownVisible && (

        <div className="dropdown-content" 
                  style={{
                    top: dropdownPosition.top + 32,
                    left: dropdownPosition.left,
                  }}
        >
          {options.map((option) => (
            <div
              className='multiple-select-chip-option'
              onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
)}
      </div></div>
  );
}

export default MultiSelectChip;
