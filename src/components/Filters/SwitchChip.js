import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * SwitchChip component creates the ON/OFF chip 
 * in the filter section
 * 
 * @author Jiby Remesh
 * @version 1.0
 * @since 2024-01-23
 */

const SwitchChip = ({ label, iconType, selectType, onToggle, value }) => {

  return (
    <div className={`chip switch-chip ${value ? 'selected' : ''}`} onClick={() => onToggle(selectType, !value)}>
      <FontAwesomeIcon className='fa-sm mr-4' icon={iconType} />
      {label}
    </div>
  );
};

export default SwitchChip;
