import React from 'react'

function Conditionalrender(props) {
    if(props.layout=="horizontal")
    {
    return(
        <div>
        <nav>
        <span className='me-4'>About</span>
        <span className='me-5'>Home</span>
        <span>Login</span>
        <span>Logout</span>
        </nav>
    </div>
    );

    }
    else{
        return(
            <div>
                <div>Home</div>
                <div>About</div>
                <div>Sudheer</div>
            </div>
        )
    }
 
    
}

export default Conditionalrender