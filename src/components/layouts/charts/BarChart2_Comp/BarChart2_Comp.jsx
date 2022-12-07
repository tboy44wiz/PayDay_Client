import React from "react";
import ReactApexChart from 'react-apexcharts'
import { Tooltip, ResponsiveContainer, XAxis, YAxis, BarChart, Bar, CartesianGrid } from "recharts";

/*=== Import _BarChart2_Comp SCSS ===*/
import "./_BarChart2_Comp.scss";


const BarChart2Comp = (props) => {
    const { chartData, chartTitle } = props;

    let series = [{
        name: "Amount",
        data: chartData.data
    }];
    let options = {
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
    };

    return (
        <section className="BarChart2Comp mCard">
            <ReactApexChart options={options} series={series} type="bar" height={350} style={{ width: "100%" }} />

            {/*<h1 className="chart__title">{ chartTitle }</h1>
            <ResponsiveContainer height={300} width="95%">
                <BarChart width={500} height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20,  bottom: 5, }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" barSize={22} />
                    <CartesianGrid strokeDasharray="3 3" />
                </BarChart>
            </ResponsiveContainer>*/}
        </section>
    );
}

export default BarChart2Comp;