import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const SOCKET_URL = 'https://data.gdscnsut.com'; // Your WebSocket URL
const socket = io(SOCKET_URL)
const useWebSocket = () => {
  // const [data, setData] = useState({
  //   heartRate: 100,
  //   cholesterol: 200, // Initial simulated value
  //   glucose: 100,     // Initial simulated value
  //   bloodPressure: { systolic: 120, diastolic: 80 } // Initial simulated value
  // });
  const [data,setLine]=useState({
    cholesterol:100,
    glucose:200,
    bodyTemperature: 98.6, // Initial body temperature
    bloodPressure: { systolic: 120, diastolic: 80 }, // Initial blood pressure
  });
  // useEffect(()=>{
  //   socket.on('random_number', (heartRate) => {
  //     setData((prevState) => ({
  //       ...prevState,
  //       heartRate:prevState.heartRate-((Math.floor(Math.random()*10))%2==0?-1:1)*parseInt(heartRate.number),
  //     }));
  //   });
  // },[socket])
  useEffect(()=>{
    socket.on("random_number",(data)=>{
        setLine((prevValue)=>{
            const list1=[...prevValue.list1];
            for(var i=0;i<prevValue.list1.length-1;i++){
                list1[i]=list1[i+1];
            }
            list1.pop();list1.push(100-((Math.floor(Math.random()*10))%2===0?-1:1)*parseInt(data.number))
            console.log(100+((Math.floor(Math.random()*10))%2===0?-1:1)*parseInt(data.number))
            return ({...prevValue,list1})
        })

    })
},[socket])

  return data;
};

export default useWebSocket;
