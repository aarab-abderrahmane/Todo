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
import { SortableContext, verticalListSortingStrategy ,horizontalListSortingStrategy} from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

// DOck 
import { FloatingDock } from "./components/ui/floating-dock";

import {useFontList}  from './components/PreferencesItems/fontAccordion'

function App() {

  //start 

  const defaultPreferences = useMemo(() => ({
      appVersion: "3.0.0",
      font: {id:"font-8",weight:500},
      corners:1.5,
      background:{active:false,id:0,path:""},
      customizeLayout:  [

          [{ id: 0, type: "calendar" },{ id: 1, type: "clock" }],
          [{ id: 2, type: "todoList" }]

        ],
      general: { hideTexts: false, opacityTexts: 100 },
      cursorType: "default",
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
        orange: {
          "--color-background": "#f2b38a",
          "--color-text": "#4a2308",
          "--color-button": "#ff8c42"
        },
        teal: {
          "--color-background": "#8adcd3",
          "--color-text": "#0c3d36",
          "--color-button": "#4ff8d4"
        },
        pink: {
          "--color-background": "#f0a9c3",
          "--color-text": "#460c2b",
          "--color-button": "#f84f93"
        },
        gray: {
          "--color-background": "#d1d1d1",
          "--color-text": "#2f2f2f",
          "--color-button": "#a0a0a0"
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
      ? preferenceObj 
      :  defaultPreferences
  })


  // for drag & drop 
  const [Layout, setLayout] = useState(PreferencesSettings.customizeLayout);
  const [dragMode,setDragMode] = useState({active:false , mode : "items"})




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

  const ApplyCorners = ()=>{


      const corner = PreferencesSettings.corners;
      document.documentElement.style.setProperty('--border-radius',`${corner}rem`)

  }

  const applyBackground = (path) => {
    if(PreferencesSettings.background.active ){
      document.documentElement.style.setProperty('--background-name', `url(${path})`);
      }
  };
  

  const fonts = useFontList();
  const applyFont = ()=>{
      
      if(PreferencesSettings.font){

          const fontName = fonts.find(ft=>ft.id===PreferencesSettings.font.id).value

          document.documentElement.style.setProperty('--font-family',fontName)
          document.documentElement.style.setProperty('--font-weight',PreferencesSettings.font.weight)

      }
  }

  useEffect(()=>{

    applyFont()

  },[PreferencesSettings.font])



  useEffect(()=>{
      applyTheme(PreferencesSettings.theme_name)
      ToggleCursor(PreferencesSettings.cursorType)
      applyBackground(PreferencesSettings.background.path)
      
  },[])



  useEffect(() => {
      ApplyCorners()
  }, [PreferencesSettings.corners]);


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

    localStorage.setItem('Preferences',JSON.stringify({...PreferencesSettings,customizeLayout:Layout}))

  },[PreferencesSettings,Layout])


   // drag drop 

  const handleDragEnd = ({ active, over }) => {

          
        if (!over || active.id === over.id) return;
        
        setLayout(prev => {
          if (!Array.isArray(prev)) return prev;

          // --- Dragging entire sections ---
          if (dragMode.mode === "sections") {
 
            const toIndex = id => {
              if (id === "left") return 0;
              if (id === "right") return 1;
              // fallback: find section that contains the item id
              return prev.findIndex(section => section.some(item => item.id === id));
            };

            const activeIndex = toIndex(active.id);
            const overIndex = toIndex(over.id);

            if (activeIndex === -1 || overIndex === -1 || activeIndex === overIndex) return prev;

            const newLayout = [...prev];
            [newLayout[activeIndex], newLayout[overIndex]] = [newLayout[overIndex], newLayout[activeIndex]];
            return newLayout;
          }


          // --- Dragging items inside calendar/clock section ---
          if (dragMode.mode === "items") {
          console.log("items mode ")

            const timeSectionIndex = prev.findIndex(
              section => section.some(item => item.type === "calendar") || section.some(item => item.type === "clock")
            );

            if (timeSectionIndex === -1) return prev;

            const timeSection = [...prev[timeSectionIndex]];
            const oldIndex = timeSection.findIndex(item => item.id === active.id);
            const newIndex = timeSection.findIndex(item => item.id === over.id);

            if (oldIndex === -1 || newIndex === -1) return prev;

            const newTimeSection = arrayMove(timeSection, oldIndex, newIndex);

            const newLayout = [...prev];
            newLayout[timeSectionIndex] = newTimeSection;

            console.log(newLayout)

            return newLayout;
          }

          return prev;
        });
    };



  const links = [
    {
      title: "Cancel",
      icon: (
        <i class="bi bi-stop-fill  text-[var(--color-text)] cursor-pointer text-xl"></i>
      ),
      action : ()=>setDragMode(prev=>({...prev , active:false}))
    },

    {
      title: "Section Mode",
      icon: (
        <i class="bi bi-vr text-[var(--color-text)] cursor-pointer text-xl "></i>
      ),
      action : ()=>setDragMode(prev=>({...prev , mode:prev.mode==="sections" ? "items" : "sections"}))
    },
 
    {
      title: "Reset",
      icon: (
        <i class="bi bi-arrow-clockwise  text-[var(--color-text)] cursor-pointer text-xl"></i>
      ),
      action : ()=> {
        setLayout(defaultPreferences.customizeLayout)
        setDragMode(prev=>({...prev , active:false}))
      }

    },
   
  ];





  return (

    <PreferencesContext.Provider value={
      {PreferencesSettings,
      defaultPreferences,
      setPreferencesSettings,
      applyTheme,
      ToggleCursor,
      applyBackground,
      ApplyCorners,
      setDragMode,
      dragMode}}>

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
              dragMode.active && (

                      <div className="fixed z-[400] bg-red-400  top-0 right-1/2 left-1/2 tansform  flex items-center justify-center h-[6rem] ">
                        <FloatingDock
                          mobileClassName="translate-y-0" // only for demo, remove for production
                          items={links}
                        />
                      </div>

              )
            }

            

              <div className="flex flex-col  items-center mt-12 md:mt-0 xl:flex-row xl:justify-center w-[100vw]  gap-4 p-4 lg:p-8 min-h-screen overflow-y-scroll overflow-x-hidden  ">

                  <DndContext
                  onDragEnd={handleDragEnd}
                  collisionDetection={closestCorners} >

                    {dragMode.mode==="items" ? (

                            Layout.map((section,index) => section.some(item=>item.type==="todoList") ? (
                                <div key={index}>
                                    <TodoList />
                                </div>
                                  
                                ) : (
                            
                                <div className="  flex flex-col gap-3 z-10   max-w-[1000px] w-[90vw] xl:w-[50vw]  ">

                                      <SortableContext
                                          items={section.map(item => item.id)}
                                          strategy={verticalListSortingStrategy}
                                        > 
                                          {section.map(item => (
                                            <ShowLatestLayout
                                              key={item.id}
                                              item={item} 
                                              condition="calendar"
                                              compar1={<GlobalCalendar/>} 
                                              compar2={<LiveClockDetailed/>}
                                              />
                                          ))}

                                      </SortableContext>

                                </div>


                            ) )
                            


                    ):(

                        
                        <SortableContext
                            items={["left", "right"]}
                            strategy={horizontalListSortingStrategy}
                          >
                            {Layout.map((section, i) => (
                              <SortableSection
                                key={i}
                                id={i === 0 ? "left" : "right"}
                                section={section}
                                Layout={Layout}
                              />
                            ))}
                          </SortableContext>




                    )}
                  </DndContext>
             

            </div>

            <Toaster />
              
      </ToastContext.Provider>
      
    </PreferencesContext.Provider>
   
  ) 
}

export default App



function SortableSection({ id, section }) {
  const { setNodeRef, attributes, listeners, transform, transition } = useSortable({ id });
  const {dragMode} = useContext(PreferencesContext);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (

    dragMode.active? (
      <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      >
        {section.some(item => item.type === "todoList") ? (
          <TodoList />
        ) : (
          <div className="shake  flex flex-col gap-3 z-10   max-w-[1000px] w-[90vw] xl:w-[50vw]  ">
            {section.map(item =>
              item.type === "calendar" ? (
                <GlobalCalendar key={item.id} />
              ) : (
                <LiveClockDetailed key={item.id} />
              )
            )}
          </div>

        )}
      </div>


    ):(

      <div

      >
        {section.some(item => item.type === "todoList") ? (
          <TodoList />
        ) : (
          <div className="  flex flex-col gap-3 z-10   max-w-[1000px] w-[90vw] xl:w-[50vw]  ">
            {section.map(item =>
              item.type === "calendar" ? (
                <GlobalCalendar key={item.id} />
              ) : (
                <LiveClockDetailed key={item.id} />
              )
            )}
          </div>

        )}
      </div>

    )
    
  );
}


function ShowLatestLayout({ item , compar1 ,compar2 , condition }) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id: item.id });


  const style = {
    transition: "0.3s transform ease",
    transform: CSS.Transform.toString(transform),
  };

  const {dragMode} = useContext(PreferencesContext);


  return dragMode.active? (


    <div ref={setNodeRef} style={style}  {...attributes} {...listeners}>
      {item.type===condition ? compar1 : compar2 }
    </div>

  ) : (

    item.type===condition ? compar1 : compar2

  );

}


function GlobalCalendar(){

  const [calendarDate,setCalendarDate] = useState(new Date())
  const { dragMode } = useContext(PreferencesContext);


    return  (
        <div
            className={`
              ${dragMode.active && dragMode.mode==="items" ? "shake" : ""}
              glass applyRadius !important shadow  flex flex-col md:flex-row items-center md:items-stretch lg:justify-between   w-full lg:h-[50vh] lg:max-h-[450px] overflow-hidden md:hover:scale-[1.03]`}
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