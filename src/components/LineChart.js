import React,{useEffect,useState} from "react"
import {Line} from "react-chartjs-2"
// import "../stylesheets/linegraph.css"
import {io} from "socket.io-client"
import {Chart as ChartJS,
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    Title,
    Tooltip,
    Legend} from "chart.js"
ChartJS.register(   
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    Title,
    Tooltip);

const LineGraph=({list1})=>{
    const linearChartData={
        labels:[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13
        ],
        datasets:[
            // {
            //     label:"steps",
            //     data:tri.list1,
            //     borderColor:"#d1e8e2",
            //     borderWidth:1.5,
            //     pointRadius:1.5,
            //     backgroundColor:"#d1e8e2"
            // },
            {
                label:"steps",
                data:list1,
                borderColor:"turquoise",
                borderWidth:1.5,
                pointRadius:1.5,
                backgroundColor:"white"
            },
        ]
    }
    const options={
        responsive:true,
        maintainAspectRatio:false,
        animation:{
            duration:0
        },
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true
            },
        },
        scales:{
            x:{
                ticks: {
                    color: "white", 
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", 
                },
                border: {
                    color: "#d1e8e2", 
                },
            },
            y:{
                ticks: {
                    color: "white", 
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", 
                },
                border: {
                    color: "#d1e8e2", 
                },
            }
        },
        layout:{
            padding:{
                left:10,
                right:10,
                top:10
            }
        }
    }
    return (
    <div className="line-container">
      <Line data={linearChartData} options={options}/>
    </div>)
}
export default LineGraph;