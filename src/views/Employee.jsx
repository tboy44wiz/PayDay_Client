import React, { useContext, useEffect } from 'react';
import { GridLoader } from "react-spinners";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../contexts/AppContextProvider';

/*==== Import AppLayout HOC ====*/
import AppLayoutHOC from '../components/layouts/AppLayout_HOC/AppLayout_HOC';

/*==== Import Components ====*/
import TabComp from '../components/pages/employee/Tab_Comp/Tab_Comp';
import FilterComp from '../components/pages/employee/Filter_Comp/Filter_Comp';
import TableComp from '../components/pages/employee/Table_Comp/Table_Comp';
import CounterComp from "../components/layouts/Counter_Comp/Counter_Comp";
import ChartsComp from '../components/pages/employee/Charts_Comp/Charts_Comp';


const Employee = () => {

  // Global State
  const { isEmployeeTableLoading, handleGetAllFilterData, handleGetEmployeeMainTableData,
    handleGetEmployeeSegmentOneData, handleGetEmployeeSegmentTwoData,
    employeeSelectedTab, employeeCounterData } = useContext(AppStoreContext);
  const { tableTab } = employeeSelectedTab;

  useEffect(() => {
    handleGetAllFilterData();
    handleGetEmployeeMainTableData();
    handleGetEmployeeSegmentOneData();
    handleGetEmployeeSegmentTwoData();
  }, []);


  return (
    <AppLayoutHOC>

      {/*==== Tab Bar ====*/}
      <TabComp />

      {/*==== Sub-Container====*/}
      {(tableTab) ? (
        <>
          <FilterComp />
          <TableComp />
        </>
      ) : (
        <>
          <CounterComp data={ employeeCounterData }  />
          <ChartsComp />
          {/* <BakAndPFAsTableComp /> */}
        </>
      )}


      {/*==== Loading Overlay Wrapper ====*/}
      {(isEmployeeTableLoading) && (
          <div className="PodcastsView__GridLoader" style={{
            height: "100vh",
            width: "100%",
            background: "rgba(13, 36, 2, 0.87)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000
          }}>
            <GridLoader
                size={20}
                color={"#FFFFFF"}
            />
          </div>
      )}

    </AppLayoutHOC>
  )
}

export default Employee;