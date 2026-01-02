import React from 'react'
import Emi from './Emi';

function Formevents() {
    function submitClick(e){
        e.preventDefault();

        alert("form is submitting");
    }
  return (
    <div > 
        <form  onSubmit={submitClick}action="">
            <dl>
                <dt>user name</dt>
                <dd>
                    <input type="text"  name="userName"/>
                </dd>
                   
               
            </dl>
            <button>submit</button>
        </form>
        <div>
            <emi></emi>
        </div>
    </div>
  )
}

export default Formevents