import React from 'react'
import { useState } from 'react'

function Emi(props) {
    const[amount,setAmount]=useState(0);
    const[years,setYears]=useState(0);
    const[rate,setRate]=useState(0);
    const[emi,setEmi]=useState(0);
    function amountChange(e){
        setAmount(e.target.value);

    }
    function yearChange(e){
        setYears(e.target.value);
    }
    function interestChange(e){
        setRate(e.target.value);

    }
    function calculateClick(){
        var principal= amount;
        var r=rate/(12*100);
        var n=years*12;
        var emi=principal*r*Math.pow(r+1,n)/(Math.pow(1+r,n)-1)
        setEmi(emi);
    }
  return (
    <div className='text-center'>
        <h2 >{props.title}</h2>
        <div className='row mt-4 border border-dark'>
            <div className='col'>
                AMOUNT you need <input type="text"  value={amount}/>

        </div>
        <div className='col'>
            for <input type="text" value={years}/> years

        </div>
        <div className='col'>
            interset rate <input type="text" value={rate}/> %

        </div>

        </div>
        <div className='row mt-3 border border-dark'>
            <div className='col'>  
                &#8377; 50,000 <input type="range" min="50000" max="100000" onChange={amountChange} value={amount}/> ₹100,000

            </div>
            <div className='col'> 
                1 <input type="range" min="1" max="5" onChange={yearChange} /> 5

            </div>
            <div className='col'>
                10.25 <input type="range" min="10.25" max="18.25" onChange={interestChange}/> 18.25

            </div>

        </div>
        <div className='text-center'>
            <button onClick={calculateClick}>calculate </button>
        </div>
        <div>
            <h1 className='text-center'>Your Monthly installment is ₹ {Math.round(emi)} for amount₹ {amount} with Rate{rate}%</h1>
        </div>
        

    </div>
  )
}

export default Emi