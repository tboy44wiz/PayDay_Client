import React from "react";
import ReactApexChart from "react-apexcharts";

/*=== Import _StackedBarChart2_Comp SCSS ===*/
import "./_StackedBarChart3_Comp.scss";


const StackedBarChart3Comp = (props) => {
    const { chartData, chartTitle } = props;


    let series = chartData.series;
    let options = {
        chart: {
            type: 'bar',
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    formatter: function (val) {
                        return `₦${parseFloat(val.toFixed(2)).toLocaleString()}`
                    },
                    style: {
                        fontSize: '10px',
                    },
                    total: {
                        enabled: true,
                        offsetX: 0,
                        style: {
                            fontSize: '12px',
                            fontWeight: 600,
                        },
                        formatter: function (val) {
                            return `₦${parseFloat(val.toFixed(2)).toLocaleString()}`
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
                    return `₦${val.toLocaleString()}`
                }
            }
        },
        xaxis: {
            categories: chartData.categories,
            labels: {
                show: false,
            },
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
    <section className="StackedBarChart3Comp mCard">
        <ReactApexChart options={ options } series={series} type="bar" height={ 400 } width={series.length * 30000} />
    </section>
  )
}

export default StackedBarChart3Comp;