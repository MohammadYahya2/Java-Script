import React, { useState } from 'react';

const Tabs = (props) => {
    const tabearr = ["hii", "man", "mutaz"];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <ul className="nav nav-tabs" role="tablist">
                {tabearr.map((item, i) => (
                    <li className="nav-item" role="presentation" key={i}>
                        <a
                            className={`nav-link ${i === activeTab ? 'active' : ''}`}
                            id={`simple-tab-${i}`}
                            data-bs-toggle="tab"
                            href={`#simple-tabpanel-${i}`}
                            role="tab"
                            aria-controls={`simple-tabpanel-${i}`}
                            aria-selected={i === activeTab}
                            onClick={() => setActiveTab(i)}
                        >
                            Tab {i + 1}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="tab-content pt-5" id="tab-content">
                {tabearr.map((item, i) => (
                    <div
                        key={i}
                        className={`tab-pane ${i === activeTab ? 'active' : ''}`}
                        id={`simple-tabpanel-${i}`}
                        role="tabpanel"
                        aria-labelledby={`simple-tab-${i}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tabs;
