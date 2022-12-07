import React from "react";
import ReactApexChart from 'react-apexcharts';

/*=== Import _BarChart_Comp SCSS ===*/
import "./_BarChart_Comp.scss";


const BarChartComp = (props) => {
    const { chartData, chartTitle } = props;
    // console.log(chartData);

    const data1 = {
        series: [{
            name: "Amount",
            data: chartData.data
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
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
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: chartData.categories,
            }
        }
    };
    const data2 = {
        series: [{
            name: "Count",
            data: chartData.data
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                zoom: {
                    type: 'xy',
                    enabled: true,
                },
            },
            title: {
                text: chartTitle,
                align: 'left'
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val
                    }
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: chartData.categories,
                labels: {
                    show: false,
                },
                range: 15
            }
        },
    };


    return (
        <section className="BarChartComp mCard">
            {
                (chartTitle === "EMPLOYEE PERCENTAGE BY MDA") ? (
                    <ReactApexChart options={ data2.options } series={ data2.series } type="bar" height={350} width={data2.series.length * 30000} style={{ width: "100%" }} />
                ) : (
                    <ReactApexChart options={ data1.options } series={ data1.series } type="bar" height={350} style={{ width: "100%" }} />
                )
            }
        </section>
    );
}

export default BarChartComp;