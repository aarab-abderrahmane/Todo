import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import { BackgroundLines } from "./components/ui/background-lines";

import Index from './landingPage/indexlanding.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className='relative bg-gray-100 '>

    <BackgroundLines className="absolute z-0 w-full h-full ">

    </BackgroundLines>

    <Index/>

    </div>




    {/* <App /> */}
  </StrictMode>,
)


