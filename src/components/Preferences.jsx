import React from "react";
import PropTypes from "prop-types";


import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { useContext } from "react";
import { PreferencesContext } from "../App";
import { Trash2Icon } from "./ui/icons/Trash2Icon";
import { CodeXmlIcon } from "./ui/icons/CodeXmlIcon";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import { Switch } from "./ui/switch";

import { Slider } from "./ui/slider";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

import { useState } from "react";


//Carousel 
import {BackgrounAccordion} from './PreferencesItems/backgroundAccordion'

// animated tooltip
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

// font accordion 
import {FontAccordion} from './PreferencesItems/fontAccordion'

export function Preferences({ showPreferences, setShowPreferences }) {
  const {
    PreferencesSettings,
    setPreferencesSettings,
    applyTheme,
    ToggleCursor,
    defaultPreferences
  } = useContext(PreferencesContext);

  let ButtonsState = PreferencesSettings.buttons;

  function toggleButton(buttonkey) {
    setPreferencesSettings((prev) => ({
      ...prev,
      buttons: {
        ...prev.buttons,
        [buttonkey]: {
          ...prev.buttons[buttonkey],
          active: !prev.buttons[buttonkey].active,
        },
      },
    }));
  }

  const [collapsibleState, setCollapsibleState] = useState({text:false,corners:false});

  const ButtonHoverRight = () => {
  return (
    <button
      onClick={() => applyTheme("default")}
      className="
        bg-white/40 rounded-3xl text-[var(--color-text)] border-[var(--color-text)]  border-2
        group relative inline-flex h-12 w-12 items-center justify-center 
        overflow-hidden rounded-full 
        transition-all duration-300 
        hover:w-[100px]
        group 
      "
    >
      {/* Text that slides in on hover */}
      <div
        className="
           text-[var(--color-text)] font-bold
          inline-flex whitespace-nowrap opacity-0 
          transition-all duration-200 
          group-hover:-translate-x-3 group-hover:opacity-100
          group-hover:cursor-pointer
        "
      >
        Reset
      </div>

      {/* Arrow Icon */}
      <div className="absolute right-3 group">
          <i className="bi bi-arrow-clockwise text-[var(--color-text)] text-xl "></i>

      </div>

    </button>
    );
  };




  return (
    <Dialog
      open={showPreferences}
      onOpenChange={() => {
        setShowPreferences((prev) => !prev);
        // setLocalData(buttons)
      }}
    >
      <form>
        <DialogContent className="applyRadius max-w-[80vw] backdrop-blur-md  bg-white/50  border-1  md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]   flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle>Preferences</DialogTitle>
            <DialogDescription>
              Customize your experience and application settings to suit your
              workflow.
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[400px] overflow-x-hidden overflow-y-scroll p-4">
            <Accordion
              type="single"
              collapsible
              className="w-full "
              defaultValue="item-1"
            >
              <AccordionItem value="item-2" >
                <AccordionTrigger>
                  Button Visibility Preferences
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="w-full flex justify-center ">
                    <div className="applyRadius bg-white/30 h-[55px] max-w-[400px] w-[80%]  flex items-center justify-between px-4 border border-black">
                      <p>Todo List</p>
                      <div className="flex justify-end flex-1 h-full pe-4  ">
                        <Trash2Icon
                          size={25}
                          duration={0.5}
                          class={` border-l border-black text-[var(--color-text)] w-[50px] p-2 flex items-center  justify-center ${
                            ButtonsState.buttonDelete.active
                              ? "bg-[var(--color-background)]"
                              : "bg-transparent"
                          }`}
                          onClick={() => toggleButton("buttonDelete")}
                        />
                        <CodeXmlIcon
                          size={25}
                          duration={0.5}
                          class={` border-l border-r border-black text-[var(--color-text)] w-[50px] p-2 flex items-center  justify-center ${
                            ButtonsState.buttonEdit.active
                              ? "bg-[var(--color-background)]"
                              : "bg-transparent"
                          }`}
                          onClick={() => toggleButton("buttonEdit")}
                        />
                      </div>
                      <div className="w-[25px] h-[25px] border-2 border-black rounded-md"></div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1" >
                <AccordionTrigger>Theme Preferences</AccordionTrigger>
                <AccordionContent className="flex flex-col   gap-4 text-balance h-[240px] md:h-[200px] lg:h-[120px]  justify-end " >
                  <div className="flex justify-center  items-center gap-6 flex-col lg:flex-row  ">

                    <div className="flex flex-wrap justify-center sm:flex-nowrap ">
                    {Object.keys(PreferencesSettings.themes)?.map(
                      (key, index) => {

                        const colorInfo = PreferencesSettings.themes[key];
                        const items_= {
                          theme_name:PreferencesSettings.theme_name,
                          colorInfo:colorInfo,
                          key : key , 
                          index:index,
                          id:`${index}abc`

                        }

                        return key !== "default" ? (


                          <AnimatedTooltip  item={items_} applyTheme={applyTheme} />

                        ) : (
                          ""
                        );
                      }
                    )}

                    </div>

                    {/* // reset Button */}
                    <ButtonHoverRight/>


                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Background
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="w-full flex justify-center ">
                   
                     <BackgrounAccordion/>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Custome Cursor</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="flex justify-center items-center gap-3 flex-col md:flex-row">
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          onClick={() => ToggleCursor("smooth")}
                          className={`w-[140px] h-[140px] ${
                            PreferencesSettings.cursorType === "smooth"
                              ? "bg-[var(--color-button)]"
                              : ""
                          }  rounded-[min(var(--border-radius),2rem)] flex flex-col justify-center items-center gap-3 border-2 border-[var(--color-text)] hover:cursor-pointer `}
                        >
                          <i className="bi bi-cursor-fill text-lg bg-white border-[var(--color-text)] flex items-center justify-center w-[40px] h-[40px] rounded-full border-2"></i>

                          <p className="p-2">Smooth cursor</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Slow, fluid cursor animation</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          onClick={() => ToggleCursor("default")}
                          className={`w-[140px] h-[140px] ${
                            PreferencesSettings.cursorType === "default"
                              ? "bg-[var(--color-button)]"
                              : ""
                          }  rounded-[min(var(--border-radius),2rem)]  flex flex-col justify-center items-center gap-3 border-2 border-[var(--color-text)]  hover:cursor-pointer `}
                        >
                          <i className="bi bi-ban text-lg bg-white border-[var(--color-text)] flex items-center justify-center w-[40px] h-[40px] rounded-full border-2"></i>

                          <p className="p-2  text-center">browser cursor</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Normal system cursor</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </AccordionContent>
              </AccordionItem>

                <AccordionItem value="item-4" >
                <AccordionTrigger>
                  Custome Font
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                        <FontAccordion/>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>General</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">

                  <div className="h-[200px] flex flex-col gap-2 ">

                    <Collapsible
                      open={collapsibleState.text}
                      onOpenChange={()=>setCollapsibleState(prev=>({...prev,text:!prev.text}))}
                      className="flex w-full flex-col gap-2"
                    >
                      <div className="flex items-center gap-3 px-4">
                        <h4 className="text-sm font-semibold">
                          Costume Text 
                        </h4>
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 "
                          >
                            <i className="bi bi-caret-down text-2xl mt-2 cursor-pointer"></i>
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                    


                      <CollapsibleContent className="flex flex-col gap-2 w-full ">
                        <div className=" px-4 py-2  text-sm">
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="airplane-mode"
                            className="bg-white/50"
                            checked={PreferencesSettings.general.hideTexts}
                            onCheckedChange={(checked) =>
                              setPreferencesSettings((prev) => ({
                                ...prev,
                                general: {
                                  ...prev.general,
                                  hideTexts: checked,
                                },
                              }))
                            }
                          />
                          <Label htmlFor="airplane-mode">Hide the texts.</Label>
                        </div>
                      </div>

                        <div className=" px-4 py-2  text-sm">
                          {!PreferencesSettings.general.hideTexts && (
                            <div className="flex items-center gap-4">
                              <p>Opacity  </p>
                              <Slider
                                defaultValue={[
                                  PreferencesSettings.general.opacityTexts,
                                ]}
                                min={0}
                                max={100}
                                step={10}
                                onValueChange={(value) =>
                                  setPreferencesSettings((prev) => ({
                                    ...prev,
                                    general: {
                                      ...prev.general,
                                      opacityTexts: value[0],
                                    },
                                  }))
                                }
                                className="bg-gray-400 max-w-[300px] w-[80vw] rounded-full mx-2"
                              />
                            </div>
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>


                    <Collapsible
                      open={collapsibleState.corners}
                      onOpenChange={()=>setCollapsibleState(prev=>({...prev,corners:!prev.corners}))}
                      className="flex w-full flex-col gap-2"
                    >
                      <div className="flex items-center gap-3 px-4">
                        <h4 className="text-sm font-semibold">
                          Corners
                        </h4>
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 "
                          >
                            <i className="bi bi-caret-down text-2xl mt-2 cursor-pointer"></i>
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
            


                      <CollapsibleContent className="flex flex-col gap-2 w-full ">
                        <div className=" px-4 py-2  text-sm">
                          {!PreferencesSettings.general.hideTexts && (
                            <div className="flex items-center gap-4">
                              <p>Corners Radius : </p>
                              <Slider
                                defaultValue={[
                                  PreferencesSettings.corners,
                                ]}
                                min={0}
                                max={3}
                                step={0.5}
                                onValueChange={(value) =>
                                  setPreferencesSettings(prev=>({...prev,corners:value}))
                                }
                                className="bg-gray-400 max-w-[300px] w-[80vw] rounded-full mx-2"
                              />
                            </div>
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>


                  </div>
                </AccordionContent>
              </AccordionItem>


            </Accordion>
          </div>

          <DialogFooter className="">
            <DialogClose asChild>
              <Button variant="outline" size="default">Back</Button>
            </DialogClose>
            <Button
              type="submit"
              variant="danger"
              size="default"
              onClick={() => {
                setPreferencesSettings(defaultPreferences)
                location.reload()

              }}
            >
              Reset ALL
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}


Preferences.propTypes = {
  showPreferences : PropTypes.bool , 
  setShowPreferences : PropTypes.func
}