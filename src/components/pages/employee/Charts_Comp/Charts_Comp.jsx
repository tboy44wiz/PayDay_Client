import React, { useContext } from "react";
import {GridLoader} from "react-spinners";

/*==== Import Chart Components ====*/
import PieChartComp from "../../../layouts/charts/PieChart_Comp/PieChart_Comp";
import MapChartComp from "../../../layouts/charts/MapChart_Comp/MapChart_Comp";
import PieChartWithInnerRadiusComp from "../../../layouts/charts/PieChartWithInnerRadius_Comp/PieChartWithInnerRadius_Comp";
import LineChartComp from "../../../layouts/charts/LineChart_Comp/LineChart_Comp";
import EmployeePercentageMDAComp from "../tables/EmployeePercentageMDA_Comp/EmployeePercentageMDA_Comp";
import StackedBarChart2Comp from "../../../layouts/charts/StackedBarChart2_Comp/StackedBarChart2_Comp";
import EmployeeByAgeGroupComp from "../tables/EmployeeByAgeGroup_Comp/EmployeeByAgeGroup_Comp";
import EmployeeByStatePercentageComp from "../tables/EmployeeByStatePercentage_Comp/EmployeeByStatePercentage_Comp";
import EmployeeSalaryRangeTableComp from "../tables/EmployeeSalaryRangeTable_Comp/EmployeeSalaryRangeTable_Comp";


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Charts_Comp SCSS ====*/
import "./_Charts_Comp.scss";
import BarChartComp from "../../../layouts/charts/BarChart_Comp/BarChart_Comp";


const ChartsComp = () => {

  // Global State
  const { isEmployeeSegmentOneLoading, isEmployeeSegmentTwoLoading, employeeGenderPieData, employeeSalaryRangeTableData, employeeSalaryRangePieData, employeeRecordsByStateTableData, employeeRecordsByStateMapData,
    employeeDistributionPieRingData, employeeRecordsByMinistryTableData, employeeRecordsByMinistryBarChartData, employeeRecordsByAgeGroupTableData2, employeeRecordsByAgeGroupStackBarData2 } = useContext(AppStoreContext);


  return (
    <section className="ChartsComp container-fluid p-0">

        <h3>Analysis</h3>

        <div className="row mb-3">
            <div className="col-12 col-lg-6">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isEmployeeSegmentOneLoading) ? (
                    <PieChartComp chartData={ employeeGenderPieData } chartTitle="GENDER" />
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
                {(!isEmployeeSegmentOneLoading) ? (
                    <PieChartWithInnerRadiusComp chartData={ employeeDistributionPieRingData } chartTitle="EMPLOYEE DISTRIBUTION" />
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
            <div className="col-12 col-lg-5">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isEmployeeSegmentTwoLoading) ? (
                    <EmployeeSalaryRangeTableComp tableData={ employeeSalaryRangeTableData } chartTitle="EMPLOYEE BY SALARY RANGE" />
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
            <div className="col-12 col-lg-7">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isEmployeeSegmentTwoLoading) ? (
                    <PieChartComp chartData={ employeeSalaryRangePieData } chartTitle="EMPLOYEE BY SALARY RANGE" />
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
                {(!isEmployeeSegmentTwoLoading) ? (
                    <EmployeePercentageMDAComp tableData={ employeeRecordsByMinistryTableData } chartTitle="EMPLOYEE PERCENTAGE BY MDA" />
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
                {(!isEmployeeSegmentTwoLoading) ? (
                    <BarChartComp chartData={ employeeRecordsByMinistryBarChartData } chartTitle="EMPLOYEE PERCENTAGE BY MDA" />
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
            <div className="col-12 col-lg-7">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isEmployeeSegmentTwoLoading) ? (
                    <EmployeeByStatePercentageComp tableData={ employeeRecordsByStateTableData } chartTitle="EMPLOYEE BY STATE & PERCENTAGE(%)" />
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
            <div className="col-12 col-lg-5">
                {/*==== Loading Overlay Wrapper ====*/}
                {(!isEmployeeSegmentTwoLoading) ? (
                    <MapChartComp mapData={ employeeRecordsByStateMapData } chartTitle="EMPLOYEE BY STATE & PERCENTAGE(%)" />
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
                {(!isEmployeeSegmentTwoLoading) ? (
                    <EmployeeByAgeGroupComp tableData={ employeeRecordsByAgeGroupTableData2 } chartTitle="EMPLOYEE BY AGE GROUP" />
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
                {(!isEmployeeSegmentTwoLoading) ? (
                    <StackedBarChart2Comp chartData={ employeeRecordsByAgeGroupStackBarData2 } chartTitle="EMPLOYEE BY AGE GROUP" />
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