import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

function Tabs(props) {
  const { activeTabIndex, tabs } = props;
  return (
    <div className="tabs">
      {tabs.map((tab, index) => {
        const active = index === activeTabIndex;
        const className = classNames('tab', active && 'tab--active');
        return (
          <span className={className} key={tab}>
            {tab}
          </span>
        );
      })}
    </div>
  );
}

Tabs.defaultProps = {
  activeTabIndex: 1,
  tabs: ['Add Media', 'Manage Media', 'Help'],
};

export default Tabs;
