import {TodoList}  from "./components/TodoList"
import {useState,createContext,useEffect, useContext,useMemo} from 'react'
import { SmoothCursor } from "./components/ui/smooth-cursor"
import LiveCalendar from "./components/LiveCalendar"
import { Calendar } from "./components/ui/calendar";
import LiveClockDetailed from './components/LiveClockDetailed'
import { ToastContext } from "./ToastContext"
import { Toaster } from "./components/ui/sonner"

export  const PreferencesContext = createContext({})


// dnd-kit
import {DndContext,closestCorners} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

// DOck 
import { FloatingDock } from "./components/ui/floating-dock";



function App() {

  //start 

  const defaultPreferences = useMemo(() => ({
      background:{active:false,id:0,path:""},
      customizeLayout: {
        active: false,
        info: [
          { id: 0, type: "calendar" },
          { id: 1, type: "clock" }
        ]
      },
      hasVisited: false,
      general: { hideTexts: false, opacityTexts: 100 },
      cursorType: "smooth",
      theme_name: "blue",
      themes: {
        red: {
          "--color-background": "#dc9090",
          "--color-text": "#460c0c",
          "--color-button": "#f84f4f"
        },
        blue: {
          "--color-background": "#90b5dc",
          "--color-text": "#0c2646",
          "--color-button": "#4f83f8"
        },
        yellow: {
          "--color-background": "#e6dc90",
          "--color-text": "#46400c",
          "--color-button": "#f8e14f"
        },
        green: {
          "--color-background": "#90dca4",
          "--color-text": "#0c4620",
          "--color-button": "#4ff86a"
        },
        purple: {
          "--color-background": "#b890dc",
          "--color-text": "#2a0c46",
          "--color-button": "#9b4ff8"
        },

        default: {
          "--color-background": "#C6C7DC",
          "--color-text": "#645D7E",
          "--color-button": "#C6C7DC"
        }
      },
      buttons: {
        buttonDelete: { active: false, color: "bg-[var(--color-primary-light)]" },
        buttonEdit: { active: true, color: "bg-[var(--color-primary-light)]" }
      }
    }), []);



  const [PreferencesSettings,setPreferencesSettings] = useState(()=>{

      const saved = localStorage.getItem('Preferences');
      const preferenceObj = JSON.parse(saved)
      return saved && saved!==null && saved!==undefined 
      ? {...preferenceObj, customizeLayout: {...preferenceObj.customizeLayout,active:false}} 
      :  defaultPreferences
  })

  const [timeItems, setTimeItems] = useState(PreferencesSettings?.customizeLayout.info);


  useEffect(()=>{
      localStorage.setItem("Preferences",JSON.stringify(PreferencesSettings))
      if(PreferencesSettings.background.id==="0"){

        document.body.classList.remove('addBackground')
        return
      }

      PreferencesSettings.background.active  ? document.body.classList.add('addBackground') : ""


  },[PreferencesSettings])
  

  const applyTheme = (name) => {
    if(PreferencesSettings){

      const selected = PreferencesSettings.themes[name];
      Object.entries(selected).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
      setPreferencesSettings(prev => ({ ...prev, theme_name: name }));

      }

  };


    const applyBackground = (path) => {
      if(PreferencesSettings.background.active ){
        document.documentElement.style.setProperty('--background-name', `url(${path})`);
        }
    };
  

  useEffect(()=>{
      applyTheme(PreferencesSettings.theme_name)
      ToggleCursor(PreferencesSettings.cursorType)
      applyBackground(PreferencesSettings.background.path)

  },[])


  function ToggleCursor(selectedCursor=""){


        const body= document.body
        let Type = (selectedCursor ?  selectedCursor : PreferencesSettings?.cursorType)
        Type =  Type.toLowerCase()


        if(Type==="smooth" && !body.classList.contains('smooth-cursor')){
                body.classList.remove('default-cursor')
                body.classList.add('smooth-cursor')
                setPreferencesSettings(prev=>({...prev,cursorType:Type}))
        }

        if(Type==="default" && !body.classList.contains('default-cursor')){
                body.classList.add('default-cursor')
                body.classList.remove('smooth-cursor')
                setPreferencesSettings(prev=>({...prev,cursorType:Type}))


        }

  }




  useEffect(()=>{

    localStorage.setItem('Preferences',JSON.stringify({...PreferencesSettings,customizeLayout:{...PreferencesSettings.customizeLayout,info:timeItems}}))

  },[timeItems,PreferencesSettings])


   // drag drop 

    const getTaskPos= id => timeItems.findIndex(task=>task.id=== id)
    const handleDragEnd = event=>{
        const {active,over} = event

        if(active.id === over.id) return ; 

        setTimeItems((prev)=>{

          const originalPos = getTaskPos(active.id)
          const newPos = getTaskPos(over.id)

          return arrayMove(prev,originalPos,newPos)
        }

        )

  }


  const links = [
    {
      title: "Cancel",
      icon: (
        <i class="bi bi-stop-fill  text-[var(--color-text)] cursor-pointer text-xl"></i>
      ),
      action : ()=>setPreferencesSettings(prev=>({...prev,customizeLayout:{...prev.customizeLayout,active:false}}))
    },
 
    {
      title: "Reset",
      icon: (
        <i class="bi bi-arrow-clockwise  text-[var(--color-text)] cursor-pointer text-xl"></i>
      ),
      action : ()=>{
        setPreferencesSettings(prev=>({...prev,customizeLayout:defaultPreferences.customizeLayout}))
        setTimeItems(defaultPreferences.customizeLayout.info)
      }


    },
   
  ];


  return (

    <PreferencesContext.Provider value={{PreferencesSettings,setPreferencesSettings,applyTheme,ToggleCursor,applyBackground}}>

      {PreferencesSettings.cursorType==="smooth" ? <SmoothCursor  /> : ""}
      
      <ToastContext.Provider>

            {!PreferencesSettings.general.hideTexts && (
                  <div className="absolute z[-999] flex flex-col jutify-center hidden xl:block text-[var(--color-text)]  overflow-hidden">
                    <h1 className=" text-[21vw] align-baseline inline-block  h-[50vh]  text-center w-full mt-[-70px]" 
                    style={{fontWeight: "700",fontStyle: "normal",opacity: PreferencesSettings.general.opacityTexts / 100}}>Tuesday</h1>

                    <h1 className="text-[21vw] align-baseline inline-block h-[50vh] text-center w-full"
                     style={{fontWeight: "700",fontStyle: "normal",opacity: PreferencesSettings.general.opacityTexts / 100}}>Midnight</h1>
                  </div>
            )}


            {
              PreferencesSettings.customizeLayout.active && (

                      <div className="fixed z-[400] bg-red-400  top-0 right-1/2 left-1/2 tansform  flex items-center justify-center h-[6rem] ">
                        <FloatingDock
                          mobileClassName="translate-y-0" // only for demo, remove for production
                          items={links}
                        />
                      </div>

              )
            }

            

              <div className="flex flex-col  items-center mt-12 md:mt-0 xl:flex-row xl:justify-center w-[100vw]  gap-4 p-4 lg:p-8 min-h-screen overflow-y-scroll overflow-x-hidden  ">

                  {/* <!-- Left section --> */}
                    <div className="flex flex-col gap-3 z-10   max-w-[1000px] w-[90vw] xl:w-[50vw]  ">

                      {/* <!-- Calendar --> */}
                      {/* <!-- Clock --> */}
                      <DndContext
                      onDragEnd={handleDragEnd}
                      collisionDetection={closestCorners} >

                        <SortableContext
                          items={timeItems.map(item => item.id)}
                          strategy={verticalListSortingStrategy}
                        >
                          {timeItems.map(item => (
                            <ShowLatestLayout key={item.id} item={item} GlobalCalendar={GlobalCalendar}/>
                          ))}
                        </SortableContext>

      
                      </DndContext>

                  </div>

                
                  {/* right section  */}
                    <TodoList />
                


            </div>

            <Toaster />
              
      </ToastContext.Provider>
      
    </PreferencesContext.Provider>
   
  )
}

export default App




function ShowLatestLayout({ item }) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id: item.id });

  const style = {
    transition: "0.3s transform ease",
    transform: CSS.Transform.toString(transform),
  };

  const { PreferencesSettings } = useContext(PreferencesContext);

  return PreferencesSettings?.customizeLayout.active? (
    <div ref={setNodeRef} style={style}  {...attributes} {...listeners}>
      {item.type==="calendar" ? <GlobalCalendar/> : <LiveClockDetailed/> }
    </div>
  ) : (
    item.type==="calendar" ? <GlobalCalendar/> : <LiveClockDetailed/> 
  );
}


function GlobalCalendar(){

  const [calendarDate,setCalendarDate] = useState(new Date())
  const { PreferencesSettings } = useContext(PreferencesContext);


    return  (
        <div
            className={`
              ${PreferencesSettings.customizeLayout.active? "shake" : ""}
              glass   rounded-3xl !important shadow  flex flex-col md:flex-row items-center md:items-stretch lg:justify-between   w-full lg:h-[50vh] lg:max-h-[450px] overflow-hidden md:hover:scale-[1.03]`}
            style={{ padding: "2px" }}
            >

              <LiveCalendar/>

              <div className="overflow-y-scroll w-full md:w-[55%] m-5  lg:h-[45vh] lg:max-h-[400px]">
              <Calendar
                  mode="single"
                  selected={calendarDate}
                  onSelect={setCalendarDate}
                  className="  shadow-sm  w-full   md:pb-6  "
                  captionLayout="dropdown"
              />
              </div>

      </div>
  )
}