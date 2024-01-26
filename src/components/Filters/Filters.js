import React, { useState, useEffect } from 'react';
import { faDesktop, faSort, faPlus } from '@fortawesome/free-solid-svg-icons';
import SwitchChip from './SwitchChip';
import SelectChip from './SelectChip';
import '../../styles/Filter.css';
import MultiSelectChip from './MultiSelectChip';
import SelectedChip from './SelectedChip';
import ScrollableContainer from '../Common/ScrollableContainer';

/**
 * The filter component generates all of the filter 
 * elements to sort out the automation list.
 * 
 * @author Jiby Remesh
 * @version 1.0
 * @since 2024-01-23
 */

const Filters = ({ onFilterChange, automationData }) => {

  const [filters, setFilters] = useState({
    extractData: false,
    monitor: false,
    site: [],
    category: '',
  });

  const handleFilterChange = (filterName, value) => {

    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const handleRemoveChip = (filterName, chipValue) => {
    let updatedChip;

    if (filterName === 'site')
      updatedChip = filters.site.filter(site => site !== chipValue);
    else
      updatedChip = ''
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: updatedChip }));
  };

  const getSelectOptions = (selectType) => {
    const extractedData = new Set();

    automationData.forEach(item => {
      item[selectType].forEach(element => {
        extractedData.add(element.title);
      });
    });
    return Array.from(extractedData);
  }

  useEffect(() => {
    let monitorData, filteredData = [...automationData];

    if (filters.extractData) {
      filteredData = automationData.filter((item) => item.title.includes("Extract"));
    }

    if (filters.monitor) {
      monitorData = automationData.filter((item) => item.title.includes("Monitor"));
      if (filters.extractData)
        filteredData = filteredData.concat(monitorData);
      else
        filteredData = monitorData;
    }

    if (filters.site.length > 0) {
      filteredData = filteredData.filter(item => filters.site.includes(item.sites[0].title));
    }

    if (filters.category) {
      filteredData = filteredData.filter(item =>
        item.categories &&
        item.categories.length > 0 &&
        item.categories.some(category =>
          category.title === filters.category
        )
      );
    }
    onFilterChange(filteredData);
  }, [filters]);

  return (
    <ScrollableContainer>
      {<div className="filter-section container">
        <div className="filter-options item text-grey">
          <SwitchChip iconType={faSort} label="Extract Data"
            selectType="extractData"
            onToggle={handleFilterChange} value={filters.extractData} />

          <SwitchChip
            label="Monitoring"
            iconType={faDesktop}
            onToggle={handleFilterChange} selectType="monitor" value={filters.monitor} />
          <MultiSelectChip
            label="Filter by Site"
            iconType={faPlus}
            selectType="site"
            options={getSelectOptions('sites')}
            selectedOptions={filters.site}
            onSelect={handleFilterChange}

          />
          <SelectChip
            label="Filter by Category"
            iconType={faPlus}
            selectType="category"
            options={getSelectOptions('categories')}
            selectedOption={filters.category}
            onSelect={handleFilterChange}
          />
          {filters.site && filters.site.map((site) => (
            <SelectedChip label={site} selectType="site"
              onToggle={handleRemoveChip} />))}

          {filters.category &&
            <SelectedChip label={filters.category} selectType="category"
              onToggle={handleRemoveChip} />
          }

        </div>
      </div>}
    </ScrollableContainer>
  );
}

export default Filters;
