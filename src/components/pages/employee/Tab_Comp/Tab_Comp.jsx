import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';

/*==== Import _Tab_Comp SCSS ====*/
import "./_Tab_Comp.scss";

const TabComp = () => {

    // Global State
    const { employeeSelectedTab, switchEmployeeTabs } = useContext(AppStoreContext);
    const { tableTab, chartTab } = employeeSelectedTab;

  return (
    <section className="TabComp">
        {/*==== Nav Tab. ====*/}
        <nav className="nav-tab">
            <NavLink to="#"
                className={(tableTab) ? ("nav-tab__item selected") : ("nav-tab__item")}
                onClick={() => { switchEmployeeTabs("tableTab") }} >
                    Table
            </NavLink>
            
            <NavLink to="#"
                className={(chartTab) ? ("nav-tab__item selected") : ("nav-tab__item")}
                    onClick={() => { switchEmployeeTabs("chartTab") }}>
                Charts
            </NavLink>
        </nav>
    </section>
  )
}

export default TabComp;