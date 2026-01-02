import React, { useEffect } from 'react'
import { useState } from 'react';


function Timerevents() {
    const[time,setTime]=useState();
    const[date,setDate]=useState();
    function loadTime(){
        var now=new Date();
        setTime(now.toLocaleTimeString());
        

    }
    function loadDate(){
        var s=new Date();
        setDate(s.toLocaleDateString());
    }
    useEffect(()=>{
        setInterval(loadTime,1000);
        console.log("called")
    }, [])
    useEffect(()=>{
        setInterval(loadDate,1000);
    },[])
    // const [msg,setMsg]=useState('');
    // function message1(){
    //     setMsg("Hello !");
    // }
    // function message2(){
    //     setMsg("sudheer Babu");
    // }
    // function message3(){
    //     setMsg("Welcome to CTS");
    // }
    // var m1, m2, m3;
    // function handleTimeOut(){
    //    m1=setTimeout( message1,2000);
    //    m2= setTimeout(message2,4000);
    //    m3= setTimeout(message3,6000);
        
    // }
    // function handleTimeClear(){
    //     alert("message two is cancled");
    //     clearTimeout(m2);
    // }
  return (
    <div>
        <h1>{time}</h1>
        <h2>{date}</h2>
        {/* <h2>{msg}</h2>
        <button onClick={handleTimeOut}>click here</button> <br/>
        <button onClick={handleTimeClear}>clear the message</button> */}
        
    </div>

  );
}

export default Timerevents