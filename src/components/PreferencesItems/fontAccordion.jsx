import { useMemo ,useContext} from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import {PreferencesContext} from '../../App'

export function useFontList() {
  return useMemo(
    () => [
      { id: "font-1", name: "Inter", value: "'Inter', sans-serif" },
      { id: "font-2", name: "Roboto", value: "'Roboto', sans-serif" },
      { id: "font-3", name: "Lato", value: "'Lato', sans-serif" },
      { id: "font-4", name: "Montserrat", value: "'Montserrat', sans-serif" },
      { id: "font-5", name: "Open Sans", value: "'Open Sans', sans-serif" },
      { id: "font-6", name: "DM Sans", value: "'DM Sans', sans-serif" },
      { id: "font-7", name: "Rubik", value: "'Rubik', sans-serif" },
      { id: "font-8", name: "Poppins", value: "'Poppins', sans-serif" }
    ],
    []
  );
}

export function FontAccordion() {

  const {PreferencesSettings,setPreferencesSettings} = useContext(PreferencesContext)
  const FontList = useFontList()

  const findFontName = (id)=>{

        const tragetName = FontList.find(ft=>ft.id===id).name
        return tragetName

  }

  const fontWeights = [200, 300, 400, 500, 600, 700];


  return (
    <div className="w-full gap-4 flex-col">
      <Popover>
        <PopoverTrigger asChild>
          <div className=" rounded-[min(var(--border-radius),1rem)] w-full flex h-[80px] border border-black overflow-hidden ">
            <Button
              variant="outline"
              className="bg-[var(--color-background)] h-full border-r border-black w-[40x] "
              style={{ borderRadius: "0px" }}
            >
              <i class="bi bi-fonts text-xl"></i>
            </Button>
            <div className="flex px-3 h-full flex-1 items-center  bg-white/50">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Customizing Typography</h1>
                <p>{findFontName(PreferencesSettings.font.id)}</p>
              </div>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80  backdrop-blur-lg   bg-white/50 h-[200px] ">
          <div className="flex flex-col gap-2">
            <h1>Font Family</h1>
            <Select onValueChange={(value)=>setPreferencesSettings(prev=>({...prev,font:{...prev.font,id:value}}))}>
              <SelectTrigger className="w-[180px] border-black">
                <SelectValue placeholder={findFontName(PreferencesSettings.font.id)} />
              </SelectTrigger>
              <SelectContent className="bg-white/50 backdrop-blur-md ">
                <SelectGroup>
                  <SelectLabel>Fonts</SelectLabel>
                  {FontList.map(ft=>(
                        <SelectItem 
                        key={ft.id}
                        value={ft.id} 
                        className={`${PreferencesSettings.font.id===ft.id ? "bg-[var(--color-background)]" : ""}`} >{ft.name}</SelectItem>
                  ))}

                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </PopoverContent>
      </Popover>

      <h1 className="my-4">Font Weight</h1>

      <div className="grid grid-cols-2  md:grid-cols-3 grid-rows-[100px_100px_100px]  md:grid-rows-[100px_100px]   gap-4">

        {fontWeights.map((num,i)=>(
                <div 
                key={i}
                onClick={()=>setPreferencesSettings(prev=>({...prev,font:{...prev.font,weight:num}}))}
                style={{ fontWeight: num }}
                className={`${PreferencesSettings.font.weight===num ? "bg-[var(--color-background)]" : ""} rounded-[min(var(--border-radius),1rem)] flex justify-center items-center   border  border-black`}>
                    Ag
                </div>

        ))}


      
      </div>
    </div>
  );
}
