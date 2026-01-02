import React from 'react'
import { useState } from 'react';

function Lifecomponent() {
  const[userDetails,setUserDetails]=useState({userName:'',Age:0,Mobile:0,city:''});
  const[nameError,setNameError]=useState("");
  const[ageError,setAgeError]=useState('');
  const[mobileError,setMobileError]=useState('');
  const[cityError,setCityError]=useState('');
  function nameChange(e){
    setUserDetails(
      {
        userName:e.target.value,
        Age:userDetails.Age,
        Mobile:userDetails.Mobile,
        city:userDetails.city
      }
    )
    if(userDetails.userName!=='')
      setNameError('');

  }
  function AgeChange(e){
    setUserDetails(
      {
        userName:userDetails.userName,
        Age:e.target.value,
        Mobile:userDetails.Mobile,
        city:userDetails.city
      }
    )
    if(userDetails.age!==''){
      setAgeError('');
    }

  }
  function MobileChanage(e){
    setUserDetails(
      {
        userName:userDetails.user,
        Age:userDetails.Age,
        Mobile:e.target.value,
        city:userDetails.city
      }
    )
    if(userDetails.Mobile!==''){
      setMobileError("");
    }

  }
  function cityChange(e){
    setUserDetails(
      {
        userName:userDetails.userName,
        Age:userDetails.Age,
        Mobile:userDetails.Mobile,
        city:e.target.value
      }
    )


  }
  function handleSubmit(e){
    e.preventDefault();
   
    
    if(userDetails.userName===''){
      setNameError("user Name Required");
    }
    if(userDetails.Age==''){
      setAgeError("Age is Required")
    }
    else if (userDetails.Age>=120){
      setAgeError("age should below 120");

    }
    else{
      if(isNaN(userDetails.Age)){
        setAgeError("Age is must be a number");
      }
    }
    if(userDetails.Mobile.match(/\d{10}/)){
      setMobileError("");
     }
     else{
      setMobileError("invalid mobile number :+91 and 10 digits");
     }
     if(userDetails.city=="-1"){
      setCityError("please select any city");

     }
     else {
      setCityError('');
     }
     

  }
  return (
    <div>
      <form  onSubmit={handleSubmit}action="">
            <dl>
                <dt >userName</dt>
                <dd><input onChange={nameChange} type="text" /></dd>
                <dd className='text-danger'>{nameError}</dd>
                <dt >Age</dt>
                <dd><input  onChange={AgeChange}type="text" /></dd>
                <dd className='text-danger'>{ageError}</dd>
                <dt >Mobile Number</dt>
                <dd><input onChange={MobileChanage} type="number" /></dd>
                <dd className='text-danger'>{mobileError}</dd>
                <dt >City</dt>
                <dd>
                  <select  onChange={cityChange}name="" id="">

                    <option value="-1">

                      Select your city
                    </option>
                    <option value="kadapa">Kadapa</option>
                    <option value="pdtr">PDTR</option>
                  </select>
                </dd>
                 <dd className='text-danger'>{cityError}</dd>
            </dl>
            <button className='btn btn-primary'>submit</button>
            
        </form>
        
    </div>
    
  )
}

export default Lifecomponent