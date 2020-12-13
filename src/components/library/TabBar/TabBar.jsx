import React, { useMemo, useLayoutEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TabBarContext from './context';
import './index.scss';

const TabBar = ({
  selectedTab,
  setSelectedTab,
  condensed,
  children,
}) => {
  const tabsContainer = useRef();
  const selectedTabElement = useRef();

  const context = useMemo(() => ({
    selectedTab,
    setSelectedTab,
    selectedTabElement,
  }), [selectedTab, setSelectedTab]);

  useLayoutEffect(() => {
    if (!tabsContainer.current || !selectedTabElement.current) return;

    const selectedTabLeft = selectedTabElement.current.offsetLeft;
    const selectedTabRight = selectedTabLeft + selectedTabElement.current.clientWidth;
    const tabsContainerLeft = tabsContainer.current.scrollLeft;
    const tabsContainerRight = tabsContainerLeft + tabsContainer.current.clientWidth;

    if (tabsContainerRight < selectedTabRight) {
      tabsContainer.current.scrollLeft = selectedTabRight - tabsContainer.current.clientWidth;
    } else if (selectedTabLeft < tabsContainerLeft) {
      tabsContainer.current.scrollLeft = selectedTabLeft;
    }
  }, [selectedTab]);

  return (
    <div
      className={classNames(
        'visor-tab-bar',
        { 'visor-tab-bar--condensed': condensed },
      )}
    >
      <div
        ref={tabsContainer}
        className="visor-tab-bar__contents"
      >
        <TabBarContext.Provider value={context}>
          {children}
        </TabBarContext.Provider>
      </div>
    </div>
  );
};

TabBar.defaultProps = {
  condensed: false,
};

TabBar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
  condensed: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TabBar;
