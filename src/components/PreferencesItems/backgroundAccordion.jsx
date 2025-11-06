import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from '../ui/carousel';

import { useMemo , useContext } from 'react';

import {PreferencesContext} from '../../App'

import { CircleCheckIcon } from '../ui/icons/CircleCheckIcon'

export function BackgrounAccordion(){

    const {setPreferencesSettings,PreferencesSettings,applyBackground} = useContext(PreferencesContext)

    const backgroundInfo = useMemo(()=>[

        {id:0,content:<i class="bi bi-ban text-2xl"></i>,path:''},
        { id: 1, content: "Asfalt Light", path: "/backgrounds/asfalt-light.png" },
        { id: 2, content: "Batthern", path: "/backgrounds/batthern.png" },
        { id: 3, content: "Church", path: "/backgrounds/church.png" },
        { id: 4, content: "Light Wool", path: "/backgrounds/light-wool.png" },
        { id: 5, content: "Starring", path: "/backgrounds/starring.png" },
        { id: 6, content: "White Brick Wall", path: "/backgrounds/white-brick-wall.png" },
        { id: 7, content: "White Diamond Dark", path: "/backgrounds/white-diamond-dark.png" },
        { id: 8, content: "Worn Dots", path: "/backgrounds/worn-dots.png" },
        { id: 9, content: "Zig Zag", path: "/backgrounds/zig-zag.png" },

    ],[])

    const handleSelectBackground = (id)=>{
        const targetPath = backgroundInfo.find(bg=>bg.id===id).path
        const isActive = id===0 ? false : true
        setPreferencesSettings(prev=>({...prev,background:{...prev.background,active:isActive,path:targetPath,id:id}}))

        applyBackground(targetPath)
    }




    return (

            <div className='relative w-full max-w-xs'>
                        <Carousel>
                          <CarouselContent>
                            {backgroundInfo.map(bg=>(
                                 <CarouselItem className='basis-1/3 ' key={bg.id} handleSelectBackground={()=>handleSelectBackground(bg.id)} >
                                    <div
                                      style={{ backgroundImage: `url(${bg.path})`,backgroundPosition:"center",backgroundColor:'var(--color-background)' }}
                                      className={`flex aspect-square items-center justify-center border-b border-l border-t  border-zinc-800`}>

                                      {PreferencesSettings.background.id===bg.id? <CircleCheckIcon size={40} duration={1} className='text-[var(--color-text)]'/>  : <p className=' text-center p-2'>{bg.content}</p>} 

                                    </div>
                                  </CarouselItem>
                            ))}
                           
                       
                          </CarouselContent>
                          <CarouselNavigation />
                        </Carousel>
          </div>
    )
}