import React from "react";
import ReactApexChart from 'react-apexcharts';

/*=== Import _LineChart_Comp SCSS ===*/
import "./_LineChart_Comp.scss";


const LineChartComp = (props) => {
    const { chartData, chartTitle } = props;
    // console.log("CHART DATA::: ", chartData);

    let series = [{
        name: "Amount",
        data: chartData.data
    }];
    let options = {
        chart: {
            height: 350,
                type: 'line',
                zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: chartTitle,
            align: 'left'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `₦${parseFloat(val).toLocaleString()}`
                }
            }
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: chartData.categories,
            labels: {
                show: false,
                formatter: false,
            },
        }
    };


    return (
        <section className="LineChartComp mCard">
            <ReactApexChart options={ options } series={ series } type="line" height={350} style={{ width: "100%" }} />
        </section>
    );
}

export default LineChartComp;