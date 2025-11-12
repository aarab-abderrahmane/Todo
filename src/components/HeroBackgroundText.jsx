import React from "react"
import { useState, useEffect ,useContext } from "react"
import { PreferencesContext } from "../App"

export function HeroBackgroundText(){

    const {PreferencesSettings} = useContext(PreferencesContext)
    const [date , setDate] = useState(new Date())

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    useEffect(()=>{

        const timer = setInterval(()=>{
            
            setDate(new Date())

        },1000)

        return ()=> clearInterval(timer)

    },[])

    function getTimeOfDay() {
        const hour = date.getHours();

        if (hour >= 5 && hour < 12) return "Morning";
        if (hour >= 12 && hour < 17) return "Afternoon";
        if (hour >= 17 && hour < 21) return "Evening";
        return "Midnight"; // 21:00 - 5:00
    
    }




    return (
        <div className="absolute z[-999] flex flex-col jutify-center hidden xl:block text-[var(--color-text)]  overflow-hidden">
                <h1 className=" text-[16vw] align-baseline inline-block  h-[50vh]  text-center w-full mt-[-40px]" 
                style={{fontWeight: "700",fontStyle: "normal",opacity: PreferencesSettings.general.opacityTexts / 100}}>{days[date.getDay()]}</h1>

                <h1 className="text-[20vw] align-baseline inline-block h-[50vh] text-center w-full"
                    style={{fontWeight: "700",fontStyle: "normal",opacity: PreferencesSettings.general.opacityTexts / 100}}>{getTimeOfDay()}</h1>
        </div>

    )

}