import React from "react";
import ReactApexChart from 'react-apexcharts'

/*=== Import _StackedBarChart2_Comp SCSS ===*/
import "./_StackedBarChart2_Comp.scss";


const StackedBarChart2Comp = (props) => {
    const { chartData, chartTitle } = props;
    console.log("CHART DATA::: ", chartData);

    let series = chartData.series;
    let options = {
        colors: ["#4791ff", "#ff5de5", "#29ab16", "#fcad08", "#fc2a2a", "#8a9102" ],
        chart: {
            type: 'bar',
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    total: {
                        enabled: true,
                        offsetX: 0,
                        style: {
                            fontSize: '12px',
                            fontWeight: 600,
                        }
                    }
                }
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        title: {
            text: chartTitle
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: chartData.categories,
            labels: {
                show: true,
                formatter: function (val) {
                    return val
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        noData: {
            text: "No available loan data",
            align: "center",
            verticalAlign: "middle",
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetX: 40,
        }
    };


    return (
    <section className="StackedBarChart2Comp mCard">
        <ReactApexChart options={ options } series={series} type="bar" height={400} style={{ width: "100%" }} />
    </section>
  )
}

export default StackedBarChart2Comp;