import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Two from './Components/Two.jsx'
// import Timerevents from './Components/Timerevents.jsx'
// import Usestate from './Components/Usestate.jsx'
// import Databinding from './Components/databinding.jsx'
// import Synthetic from './Components/Synthetic.jsx'
// import Mouseevents from './Components/Mouseevents.jsx'
// import Mouseover from './Components/Mouseover.jsx'
// import Keyboard from './Components/Keyboard.jsx'
// import Elementstate from './Components/Elementstate.jsx'
// import Formevents from './Components/Formevents.jsx'
// import Emi from './Components/Emi.jsx'
// import Propeties from './Components/Propeties.jsx'
// import Conditionalrender from './Components/Conditionalrender.jsx'
// import Demo from './Components/Demo.jsx'
// import Lifecomponent from './Components/Lifecomponent.jsx'

import Routing from './Components/Routing.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Usestate></Usestate> */}
    {/* <Databinding></Databinding> */}
    {/* <Synthetic></Synthetic> */}
    {/* <Mouseevents></Mouseevents> */}
    {/* <Mouseover></Mouseover> */}
    {/* <Keyboard></Keyboard> */}
    {/* <Elementstate></Elementstate> */}
    {/* <Formevents></Formevents> */}
    {/* <Timerevents></Timerevents> */}
    {/* <Emi></Emi> */}
    {/* <Propeties></Propeties>
    <Conditionalrender></Conditionalrender> */}
    {/* <Demo></Demo> */}
    {/* <Lifecomponent></Lifecomponent> */}
    <Routing></Routing>

    
  </StrictMode>,
)
