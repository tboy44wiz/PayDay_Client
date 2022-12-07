import React from "react";
import ReactApexChart from 'react-apexcharts';

/*=== Import _PieChartWithInnerRadius_Comp SCSS ===*/
import "./_PieChartWithInnerRadius_Comp.scss";



const PieChartWithInnerRadiusComp = (props) => {
    const { chartData, chartTitle } = props;
    let totalSum = 0;
    chartData.series.forEach(item => totalSum += item);

    let options = {
        labels: chartData.labels,
        chart: {
            type: 'donut',
        },
        title: {
            text: chartTitle,
            align: 'left'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: '',
                            formatter: () => totalSum
                        }
                    }
                }
            }
        }
    };

    return (
        <section className="PieChartWithInnerRadiusComp mCard">
            <ReactApexChart options={options} series={ chartData.series } type="donut" width={500} />
        </section>
    );
}

export default PieChartWithInnerRadiusComp;