import {TodoList}  from "./components/TodoList"
import {useState} from 'react'
import * as React from "react"
import { SmoothCursor } from "./components/ui/smooth-cursor"
import LiveClock from "./components/LiveClock"
import { Calendar } from "./components/ui/calendar";
import LiveClockDetailed from './components/LiveClockDetailed'


function App() {

  const [calendarDate,setCalendarDate] = useState(new Date())

  return (
    <>

    <SmoothCursor  />

          
            <div className="absolute z[-999] flex flex-col jutify-center hidden xl:block text-[var(--color-text)]  overflow-hidden">
              <h1 className="text-[21vw] align-baseline inline-block  h-[50vh]  text-center w-full mt-[-70px]" style={{fontWeight: "700",fontStyle: "normal"}}>Tuesday</h1>
              <h1 className="text-[21vw] align-baseline inline-block h-[50vh] text-center w-full" style={{fontWeight: "700",fontStyle: "normal"}}>Midnight</h1>
            </div>
              
              
              <div className="flex flex-col items-center mt-12 md:mt-0 xl:flex-row xl:justify-center w-[100vw]  gap-4 p-4 lg:p-8 min-h-screen overflow-y-scroll overflow-x-hidden  ">




                  {/* <!-- Left section --> */}
                    <div className="flex flex-col gap-3 z-10   max-w-[1000px] w-[90vw] xl:w-[50vw]  ">

                    {/* <!-- Calendar --> */}
                    <div
                    class="glass   rounded-xl shadow  flex flex-col md:flex-row items-center md:items-stretch lg:justify-between   w-full lg:h-[50vh] lg:max-h-[450px] overflow-hidden md:hover:scale-[1.03]"
                    style={{ padding: "2px", borderRadius: "1rem" }}
                    >

                      <LiveClock/>


                      <Calendar
                          mode="single"
                          selected={calendarDate}
                          onSelect={setCalendarDate}
                          className="rounded-md  shadow-sm  w-full md:w-[55%] m-5  lg:h-[50vh] lg:max-h-[400px] md:pb-12  overflow-y-scroll  "
                          captionLayout="dropdown"
                      />
                    </div>
                    
                    
                    {/* <!-- Clock --> */}
                    <LiveClockDetailed />

                  </div>

                
                  {/* right section  */}
                    <TodoList />
                


            </div>

    


    </>
  )
}

export default App
