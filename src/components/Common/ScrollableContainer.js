import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

/**
 * ScrollableContainer component to enable the child elements to slide left-right.
 * 
 * @author Jiby Remesh
 * @version 1.0
 * @since 2024-01-23
 */

const ScrollableContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;

    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollWidth > container.clientWidth + container.scrollLeft);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollWidth > container.clientWidth + container.scrollLeft);
    }
  }, [children]);

  const handleScrollLeft = () => {
    const container = containerRef.current;

    if (container) {
      container.scrollLeft -= 100;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(true);
    }
  };

  const handleScrollRight = () => {
    const container = containerRef.current;

    if (container) {
      container.scrollLeft += 100;
      setShowRightArrow(container.scrollWidth > container.clientWidth + container.scrollLeft);
      setShowLeftArrow(true);
    }
  };

  return (
    <div className='scroll-container'>
      {showLeftArrow && <span className='circle' onClick={handleScrollLeft} >
        <FontAwesomeIcon className='chevron-left fa-sm' icon={faChevronLeft} /></span>}
      <div className='scroll-items' ref={containerRef}>
        {children}
      </div>
      {showRightArrow && <span className='circle' onClick={handleScrollRight} >
        <FontAwesomeIcon className='chevron-right fa-sm' icon={faChevronRight} /></span>}
    </div>
  );
};

export default ScrollableContainer;