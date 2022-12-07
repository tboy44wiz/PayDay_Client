import React, { useContext } from "react";
import {GridLoader} from "react-spinners";

/*==== Import Chart Components ====*/
import PieChartComp from "../../../layouts/charts/PieChart_Comp/PieChart_Comp";
import AreaChartComp from "../../../layouts/charts/AreaChart_Comp/AreaChart_Comp";
import MapChartComp from "../../../layouts/charts/MapChart_Comp/MapChart_Comp";
import BarChartComp from "../../../layouts/charts/BarChart_Comp/BarChart_Comp";
import StackedBarChart2Comp from "../../../layouts/charts/StackedBarChart2_Comp/StackedBarChart2_Comp";
import PieChartWithInnerRadiusComp from "../../../layouts/charts/PieChartWithInnerRadius_Comp/PieChartWithInnerRadius_Comp";
import LineChartComp from "../../../layouts/charts/LineChart_Comp/LineChart_Comp";
import StackedBarChart3Comp from "../../../layouts/charts/StackedBarChart3_Comp/StackedBarChart3_Comp";
import BarChart2Comp from "../../../layouts/charts/BarChart2_Comp/BarChart2_Comp";


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Charts_Comp SCSS ====*/
import "./_Charts_Comp.scss";


const ChartsComp = () => {

  // Global State
  const { isDashBoardSegmentOneLoading, isDashBoardSegmentTwoLoading, isDashBoardSegmentThreeLoading, isChartLoading, dashboardGenderPieData, dashboardAgeGroupBarData, dashboardAnnualPaymentAreaData, dashboardAmountReceivedByPFAsLineData,
      dashboardMapData, dashboardTopEmployeeByMinistryData, dashboardMDASalaryDeductionsData, dashboardEmployeeDistributionRingData, dashboardMonthlyEmployeePaymentBarData } = useContext(AppStoreContext);

  return (
    <section className="ChartsComp container-fluid p-0">
        <div className="row mb-3">
            <div className="col-12 col-lg-6">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardSegmentOneLoading) ? (
                    <PieChartComp chartData={ dashboardGenderPieData } chartTitle="GENDER" />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
            <div className="col-12 col-lg-6">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardSegmentOneLoading) ? (
                    <StackedBarChart2Comp chartData={ dashboardAgeGroupBarData } chartTitle="EMPLOYEE BY AGE GROUP " />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12 col-lg-6">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardSegmentTwoLoading) ? (
                    <AreaChartComp chartData={ dashboardAnnualPaymentAreaData } chartTitle="ANNUAL EMPLOYEE PAYMENT" />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
            <div className="col-12 col-lg-6">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardSegmentTwoLoading) ? (
                    <LineChartComp chartData={ dashboardAmountReceivedByPFAsLineData } chartTitle="AMOUNT RECIEVED BY PFAs" />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardSegmentTwoLoading) ? (
                    <BarChartComp chartData={ dashboardTopEmployeeByMinistryData } chartTitle="EMPLOYEE PERCENTAGE BY MDA" />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12 col-lg-6">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardSegmentThreeLoading) ? (
                    <PieChartWithInnerRadiusComp chartData={ dashboardEmployeeDistributionRingData } chartTitle="EMPLOYEE DISTRIBUTION" />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
            <div className="col-12 col-lg-6">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardSegmentThreeLoading) ? (
                    <MapChartComp mapData={ dashboardMapData } chartTitle="EMPLOYEE BY STATE & PERCENTAGE(%)" />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isChartLoading) ? (
                    <></>
                    // <StackedBarChart3Comp chartData={ dashboardMDASalaryDeductionsData } chartTitle="MDA PAYMENT BY SALARY & DEDUCTION" />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardSegmentThreeLoading) ? (
                    <BarChartComp chartData={ dashboardMonthlyEmployeePaymentBarData } chartTitle="MONTHLY EMPLOYEE PAYMENT (GROSS)" />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default ChartsComp