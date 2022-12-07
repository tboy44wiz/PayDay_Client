import React, {useContext, useEffect} from "react";
import { GridLoader } from "react-spinners";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../contexts/AppContextProvider";

/*==== Import AppLayout HOC ====*/
import AppLayoutHOC from "../components/layouts/AppLayout_HOC/AppLayout_HOC";

/*==== Import Components ====*/
import TabComp from "../components/pages/financial/Tab_Comp/Tab_Comp";
import FilterComp from "../components/pages/financial/Filter_Comp/Filter_Comp";
import TableComp from "../components/pages/financial/Table_Comp/Table_Comp";
import ChartsComp from "../components/pages/financial/Charts_Comp/Charts_Comp";
import CounterComp from "../components/layouts/Counter_Comp/Counter_Comp";



const Financial = () => {

  // Global State
  const { isFinancialTableLoading, handleGetAllFilterData, financialCounterData, handleGetFinancialMainTableData, financialSelectedTab,
    handleGetFinancialSegmentOneData, handleGetFinancialSegmentTwoData, handleGetFinancialSegmentThreeData, handleGetFinancialSegmentFourData } = useContext(AppStoreContext);
  const { tableTab } = financialSelectedTab;


  useEffect(() => {
    handleGetAllFilterData();
    handleGetFinancialMainTableData();
    handleGetFinancialSegmentOneData();
    handleGetFinancialSegmentTwoData();
    handleGetFinancialSegmentThreeData();
    handleGetFinancialSegmentFourData();
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
              <CounterComp data={ financialCounterData } />
              <ChartsComp />
              {/* <BakAndPFAsTableComp /> */}
            </>
        )}


        {/*==== Loading Overlay Wrapper ====*/}
        {(isFinancialTableLoading) && (
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

export default Financial