import React, { useContext, useEffect } from 'react';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../contexts/AppContextProvider';

/*==== Import AppLayout HOC ====*/
import AppLayoutHOC from '../components/layouts/AppLayout_HOC/AppLayout_HOC';

/*==== Import Components ====*/
import TableComp from "../components/pages/enrollment/Table_Comp/Table_Comp";
import FilterComp from "../components/pages/enrollment/Filter_Comp/Filter_Comp";
import CounterComp from "../components/pages/enrollment/Counter_Comp/Counter_Comp";


const Enrollment = () => {

  // Global State
  const { employeeSelectedTab } = useContext(AppStoreContext);
  const { tableTab } = employeeSelectedTab;

  useEffect(() => {
  }, []);


  return (
    <AppLayoutHOC>

      {/*==== Tab Bar ====*/}
      {/*<TabComp />*/}

      {/*==== Sub-Container====*/}
      {/*{(tableTab) ? (
        <>
          <FilterComp />
          <TableComp />
        </>
      ) : (
        <>
          <CounterComp />
          <ChartsComp />
          <BakAndPFAsTableComp />
        </>
      )}*/}


      <FilterComp />
      <CounterComp />
      <TableComp />


    </AppLayoutHOC>
  )
}

export default Enrollment;