import React from 'react'
import { useState } from 'react'


function Elementstate() {
    const [userName,setUserName]=useState('');
const [userError,setUserError]=useState('');
const [cityName,setCityName]=useState('');
const[CityError,setCityError]=useState('');
const [msg,setMsg]=useState('');
    
    function handleUserName(e){
        setUserName(e.target.value);

    }
    function submitClick(){
        if(userName==""){
            setUserError("user name is required");
        }
        else{
            document.write("hello "  + " "+userName + " your city is "+ " " +cityName);
        }
    }
    function handleUserBlur(){
        if(userName==""){
            setUserError("user name Required");
        }
        else{
            document.write("hello"+ " "+ userName);
        }

    }
    function handleUserKeyUp(){
        if(userName==""){
            setUserError("user name Required");
        }
        else{
            setUserError('');
        }


    }
    function cityChanged(e){
        if(e.target.value==="notcity"){
            setCityError("please select your city");
        }
        else{
            setCityName(e.target.value);
            setCityError('');

        }

    }
    function handleCopy(){
        setMsg("copy to clipboard");
    }
    function handlePaste(){
        setMsg("message is paseted");
    }
    function handleCut(){
        setMsg("message is cut");
    }
    

  return (
    <div  justify-content="center" align-text="center"className='container-fluid' >
        <h2>Register user</h2>
        <dl>
            <dt>user name</dt>
            <dd> <input type="text"  onKeyUp={handleUserKeyUp}onBlur={handleUserBlur}  onChange={handleUserName}/></dd>
            <dd className='text-danger'>{userError}</dd>
            {/* <dd> <input type="submit" /></dd> */}
        </dl>
        <dd>
            <dt>city name</dt>
            <select onClick={cityChanged}>
                <option value="not city">select city</option>
                <option value="kadapa"> KADAPA</option>
                <option value="HYD"> HYD</option>
                <option value="Banglore"> Banglore</option>

            </select>
        </dd>
        <dd className='text-danger'>{cityChanged}</dd>
        <dt>phone number</dt>
        <dd>
            <input type="number" onCut={handleCut} onCopy={handleCopy} onPaste={handlePaste} />
            
        </dd>
        <dd className='text-danger'>{msg}</dd>
        

        <button onClick={submitClick}>submit</button>
        <script>
            console.log(submit);
        </script>

    </div>
  )
}

export default Elementstate

