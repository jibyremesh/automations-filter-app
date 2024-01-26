import React, { useState, useEffect } from 'react';
import Card from './Common/Card';
import '../styles/Dashboard.css';
import Filters from './Filters/Filters';
import { loadAutomationData } from './Common/DataHandler';

/**
 * AutomationDashboard component create 
 * the filter section and automation list
 * 
 * @author Jiby Remesh
 * @version 1.0
 * @since 2024-01-24
 */

const AutomationDashboard = () => {
  const [automations, setAutomations] = useState([]);
  const [filteredAutomations, setFilteredAutomations] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    extractData: '',
    monitor: '',
    site: [],
    category: '',
  });


  useEffect(() => {

    try {

      //replace after backend dev
      const oneClickAutomations = loadAutomationData()
      setAutomations(oneClickAutomations);
      setFilteredAutomations(oneClickAutomations);

    } catch (error) {
      console.error('Error fetching automations:', error);
    }

  }, []);


  const handleLoadAll = () => {
    // handle See All link click 
  };


  const handleFilterChange = (filters) => {

    setFilteredAutomations(filters);
  };



  return (<>
    <div className='container justify-content'>
      <span className='text-grey text-normal'>
        Here are some Automations that pre-defined for product availability monitoring.
      </span>
      <span className='text-purple link' onClick={() => handleLoadAll()}>See all</span>
    </div>
    <Filters
      selectedFilters={selectedFilters}
      onFilterChange={handleFilterChange}
      automationData={automations}
    />
    <div className="container">
      {filteredAutomations.map((automation) => (
        <Card key={automation.id} data={automation} />
      ))}
    </div>
  </>
  );
};

export default AutomationDashboard;
