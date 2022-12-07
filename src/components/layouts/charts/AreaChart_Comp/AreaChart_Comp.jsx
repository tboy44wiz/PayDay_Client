import React from "react";
import ReactApexChart from 'react-apexcharts';

/*=== Import _AreaChart_Comp SCSS ===*/
import "./_AreaChart_Comp.scss";



const AreaChartComp = (props) => {
    const { chartData, chartTitle } = props;
    // console.log("CHART DATA::: ", chartData);

    let series = [{
        name: "Amount",
        data: chartData.series
    }];
    let options = {
        chart: {
            type: 'area',
            height: 400,
            zoom: {
                enabled: false
            }
        },
        labels: chartData.labels,
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: chartTitle,
            align: 'left',
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `₦${parseFloat(val).toLocaleString()}`
                }
            }
        },
        xaxis: {
            type: 'year',
        },
        yaxis: {
            // opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        }
    };


    return (
        <section className="AreaChartComp mCard">
            <ReactApexChart options={options} series={series} type="area" height={400} style={{ width: "100%" }} />
        </section>
    );
}

export default AreaChartComp;