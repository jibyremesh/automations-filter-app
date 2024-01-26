import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

/**
 * SelectedChip component adds each selected chip item to the filter section,
 *  displaying all the selected things.
 * 
 * @author Jiby Remesh
 * @version 1.0
 * @since 2024-01-24
 */

const SelectedChip = ({ label, selectType, onToggle }) => {

  return (
    <div className={`chip switch-chip selected`} onClick={() => onToggle(selectType, label)}>
      <span className='mr-8'> {label}</span>
      <FontAwesomeIcon className='fa-sm' icon={faClose} />
    </div>
  );
};

export default SelectedChip;
