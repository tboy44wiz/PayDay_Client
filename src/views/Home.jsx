import React, { useContext, useEffect } from 'react';
import { GridLoader } from "react-spinners";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../contexts/AppContextProvider';

/*==== Import AppLayout HOC ====*/
import AppLayoutHOC from '../components/layouts/AppLayout_HOC/AppLayout_HOC';

/*==== Import Components ====*/
import FilterComp from '../components/pages/home/Filter_Comp/Filter_Comp';
import TableComp from '../components/pages/home/Table_Comp/Table_Comp';
import BanksAndPFAsTableComp from '../components/pages/home/tables/BanksAndPFAsTable_Comp/BanksAndPFAsTable_Comp';
import CounterComp from "../components/layouts/Counter_Comp/Counter_Comp";
import ChartsComp from '../components/pages/home/Charts_Comp/Charts_Comp';
import TabComp from '../components/pages/home/Tab_Comp/Tab_Comp';


const Home = () => {

    // Global State
    const { isDashBoardTableLoading, dashboardTableData, dashboardCounterData, handleGetAllFilterData, dashboardSelectedTab,
        handleGetDashboardMainTableData, handleGetDashboardTopTenTableData,
        handleGetDashboardSegmentOneData, handleGetDashboardSegmentTwoData, handleGetDashboardSegmentThreeData } = useContext(AppStoreContext);
    const { tableTab } = dashboardSelectedTab;


  useEffect(() => {

      if (dashboardTableData !== []) {
          handleGetAllFilterData();
          handleGetDashboardMainTableData();
          handleGetDashboardTopTenTableData();
          handleGetDashboardSegmentOneData();
          handleGetDashboardSegmentTwoData();
          handleGetDashboardSegmentThreeData();
      }
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
                  <BanksAndPFAsTableComp />
              </>
          ) : (
              <>
                  <CounterComp data={ dashboardCounterData } />
                  <ChartsComp />
              </>
          )}


          {/*==== Loading Overlay Wrapper ====*/}
          {(isDashBoardTableLoading) && (
              <div style={{
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

export default Home;