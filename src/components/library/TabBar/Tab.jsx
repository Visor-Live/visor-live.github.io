import React, { useCallback, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TabBarContext from './context';

const Tab = ({
  text,
  className,
  ...props
}) => {
  const { selectedTab, setSelectedTab, selectedTabElement } = useContext(TabBarContext);

  const handleClick = useCallback(() => (
    setSelectedTab && setSelectedTab(text)
  ), [text, setSelectedTab]);

  const selected = text === selectedTab;

  return (
    <span
      ref={selected ? selectedTabElement : null}
      className={classNames(
        'visor-tab-bar__tab',
        { 'visor-tab-bar__tab--selected': selected },
        className,
      )}
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex="0"
      {...props}
    >
      {text}
    </span>
  );
};

Tab.defaultProps = {
  className: '',
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Tab;
