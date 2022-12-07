import React, { useContext } from "react";
import {GridLoader} from "react-spinners";

/*==== Import Chart Components ====*/
import PieChartComp from "../../../layouts/charts/PieChart_Comp/PieChart_Comp";
import AreaChartComp from "../../../layouts/charts/AreaChart_Comp/AreaChart_Comp";
import MapChartComp from "../../../layouts/charts/MapChart_Comp/MapChart_Comp";
import StackedBarChartComp from "../../../layouts/charts/StackedBarChart_Comp/StackedBarChart_Comp";
import StackedBarChart2Comp from "../../../layouts/charts/StackedBarChart2_Comp/StackedBarChart2_Comp";
import PieChartWithInnerRadiusComp from "../../../layouts/charts/PieChartWithInnerRadius_Comp/PieChartWithInnerRadius_Comp";
import LineChartComp from "../../../layouts/charts/LineChart_Comp/LineChart_Comp";
import AnnualEmployeePaymentComp from "../tables/AnnualEmployeePayment_Comp/AnnualEmployeePayment_Comp";


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Charts_Comp SCSS ====*/
import "./_Charts_Comp.scss";
import GeneralTableComp from "../tables/GeneralTable_Comp/GeneralTable_Comp";
import SalaryDeductionTableComp from "../tables/SalaryDeductionTable_Comp/SalaryDeductionTable_Comp";
import StackedBarChart3Comp from "../../../layouts/charts/StackedBarChart3_Comp/StackedBarChart3_Comp";





const ChartsComp = () => {

  // Global State
  const { isFinancialSegmentTwoLoading, isFinancialSegmentThreeLoading, isFinancialSegmentFourLoading,
    financialDeductionTableData, financialDeductionPieWithRadiusData, financialDistributionTableData, financialDistributionRingData, financialEarningDeductionPieData, financialAnnualEmployeePaymentTableData,
    financialMDASalaryDeductionTableData, financialMDASalaryDeductionData, financialAmountReceivedByPFAsTableData, financialAmountReceivedByPFAsLineData, financialAmountReceivedByBanksTableData, financialAmountReceivedByBanksLineData,
    dashboardFinancialDistributionRingData} = useContext(AppStoreContext);

  return (
    <section className="ChartsComp container-fluid p-0">
      
    <h3>Analysis</h3>

      {/*==== Segment Two ====*/}
      <div className="row mb-3">
        <div className="col-12 col-lg-6">
          {/*==== Loading Overlay Wrapper ====*/}
          {(!isFinancialSegmentTwoLoading) ? (
              <PieChartComp chartData={ financialEarningDeductionPieData } chartTitle="EARNING VS DEDUCTION" />
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
          {(!isFinancialSegmentTwoLoading) ? (
              <SalaryDeductionTableComp tableData={ financialMDASalaryDeductionTableData } chartTitle="MDA PAYMENT BY SALARY & DEDUCTION" />
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
          {(!isFinancialSegmentTwoLoading) ? (
              // <div></div>
              <StackedBarChart3Comp chartData={ financialMDASalaryDeductionData } chartTitle="MDA PAYMENT BY SALARY & DEDUCTION" />
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
          {(!isFinancialSegmentTwoLoading) ? (
              // <></>
              <AnnualEmployeePaymentComp tableData={ financialAnnualEmployeePaymentTableData } chartTitle="ANNUAL EMPLOYEE PAYMENT" />
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
          {(!isFinancialSegmentTwoLoading) ? (
              // <></>
              <AreaChartComp chartData={ financialAnnualEmployeePaymentTableData } chartTitle="ANNUAL EMPLOYEE PAYMENT" />
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


      {/*==== Segment Three ====*/}
      <div className="row mb-3">
        <div className="col-12 col-lg-6">
          {/*==== Loading Overlay Wrapper ====*/}
          {(!isFinancialSegmentThreeLoading) ? (
              <GeneralTableComp
                  tableData={ financialDeductionTableData }
                  chartTitle="DEDUCTION"
                  colOneTitle="Deduction"
                  colTwoTitle="Employee Count"
                  colThreeTitle="Percentage"
              />
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
          {(!isFinancialSegmentThreeLoading) ? (
              // <></>
              <PieChartWithInnerRadiusComp chartData={ financialDeductionPieWithRadiusData } chartTitle="DEDUCTION" />
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

      {/*==== Segment Three ====*/}
      <div className="row mb-3">
        <div className="col-12 col-lg-6">
          {/*==== Loading Overlay Wrapper ====*/}
          {(!isFinancialSegmentThreeLoading) ? (
              // <></>
              <GeneralTableComp
                  tableData={ financialDistributionTableData }
                  chartTitle="EMPLOYEE DISTRIBUTION"
                  colOneTitle="Names"
                  colTwoTitle="Employee Count"
                  colThreeTitle="Percentage"
              />
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
          {(!isFinancialSegmentThreeLoading) ? (
              // <></>
              <PieChartWithInnerRadiusComp chartData={ financialDistributionRingData } chartTitle="EMPLOYEE DISTRIBUTION" />
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


      {/*==== Segment Four ====*/}
      <div className="row mb-3">
        <div className="col-12 col-lg-6">
          {/*==== Loading Overlay Wrapper ====*/}
          {(!isFinancialSegmentFourLoading) ? (
              // <></>
              <GeneralTableComp
                  tableData={ financialAmountReceivedByPFAsTableData }
                  chartTitle="AMOUNT RECEIVED BY PFAs"
                  colOneTitle="PFAs"
                  colTwoTitle="Employee Count"
                  colThreeTitle="Percentage"
              />
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
          {(!isFinancialSegmentFourLoading) ? (
              // <></>
              <LineChartComp chartData={ financialAmountReceivedByPFAsLineData } chartTitle="AMOUNT RECEIVED BY PFAs" />
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

      {/*==== Segment Four ====*/}
      <div className="row">
        <div className="col-12 col-lg-6">
          {/*==== Loading Overlay Wrapper ====*/}
          {(!isFinancialSegmentFourLoading) ? (
              // <></>
              <GeneralTableComp
                  tableData={ financialAmountReceivedByBanksTableData }
                  chartTitle="AMOUNT DISBURSED BY BANKS"
                  colOneTitle="Banks"
                  colTwoTitle="Amount(₦)"
                  colThreeTitle="Percentage"
              />
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
          {(!isFinancialSegmentFourLoading) ? (
              // <></>
              <LineChartComp chartData={ financialAmountReceivedByBanksLineData } chartTitle="AMOUNT DISBURSED BY BANKS" />
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

      {/*<div className="row">
        <div className="col-12 col-lg-6">
          <AnnualEmployeePaymentComp tableData={ annualEmployeePaymentTableData } chartTitle="TAX REMUNERATION BY STATES" />
        </div>
        <div className="col-12 col-lg-6">
          <MapChartComp mapData={ dashboardMapData } chartTitle="TAX REMUNERATION BY STATES" />
        </div>
      </div>*/}
    </section>
  )
}

export default ChartsComp;