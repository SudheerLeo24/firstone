import React from 'react'
import{BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {Emi} from './Components/Emi.jsx'

function Routing() {
  return (
    <div className='container-fluid'>
        <h2>Tutorial-Web Technologies</h2>
        <BrowserRouter>
        <section className='row'>
            <nav className='col-3'>
                <div className='btn-group-vertical'>
                    <Link to="Emi"/>
                    

                </div>
                
            </nav>

        <div>

        
        <Routes>
            <Route path='Emi' element={<Emi></Emi>}>

            </Route>
        </Routes>
        </div>
        </section>
        </BrowserRouter>

    </div>
  )
}

export default Routing