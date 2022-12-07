import React, {useContext} from "react";
import ReactApexChart from 'react-apexcharts';

/*=== Import _PieChart_Comp SCSS ===*/
import "./_PieChart_Comp.scss";
import {AppStoreContext} from "../../../../contexts/AppContextProvider";


const PieChartComp = (props) => {

    // Global State
    const {  isLightTheme } = useContext(AppStoreContext);


    const { chartData, chartTitle } = props;
    // console.log("DATA::: ", chartData);

    let series = chartData.series;
    let options = {
        colors: ["#ff5de5", "#4791ff", "#29ab16", "#fcad08", "#fc2a2a", "#8a9102" ],
        labels: chartData.labels,
        title: {
            text: chartTitle,
            align: 'left',
            style: {
                color: (isLightTheme) ? "#161616" : "#efefef",
            }
        },
    };

    return (
        <section className="PieChartComp mCard">

            <ReactApexChart options={options} series={series} type="pie" width={500} />
        </section>
    );
}

export default PieChartComp;