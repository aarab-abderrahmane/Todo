import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
} from "./components/ui/dialog";
import React, { useReducer ,useRef} from "react";



import { ArrowUpRightIcon } from "lucide-react"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./components/ui/empty"


import { toast } from "sonner" 

import {ConfettiButton} from './components/ui/confetti'

// --- Scene Components :

function Scene1({ dispatch,scene }) {
  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-row">
      <div className="flex-1 flex flex-col justify-between h-full bg-gray-300">
        <div className="flex-1 p-6 flex flex-col items-start gap-12">
          <p className="bg-[var(--color-background)] w-10 flex justify-center items-center h-10 p-2 rounded-full text-sm font-bold text-[var(--color-text)]">
            {scene}
          </p>
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome to PlanPulse</h1>
            <p className="text-sm font-normal">
              This Todo app helps you stay organized and productive by managing your daily tasks in one place. 
              You can easily create, edit, and delete tasks. With a clean and responsive interface built using 
              React and Vite, it provides a smooth user experience on any device. Whether for personal use or 
              work planning, this project offers a simple and efficient way to keep your goals clear and your 
              workflow focused.
            </p>
          </div>
        </div>

        <div className="h-[50px] w-full flex items-start gap-2 justify-end px-6">
          <Button
            variant="outline"
            className="bg-white/50"
            onClick={() => dispatch({ type: "skip" })}
          >
            Skip
          </Button>
          <Button onClick={() => dispatch({ type: "2" })}>Next</Button>
        </div>
      </div>
      <img
        src="logo.png"
        className="md:w-[50%] w-full h-full object-cover"
      />
    </div>
  );
}

function Scene2({ dispatch ,scene}) {
  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-row">
      <div className="flex-1 flex flex-col justify-between h-full bg-gray-300">
        <div className="flex-1 p-6 flex flex-col items-start gap-12">
          <p className="bg-[var(--color-background)] w-10 flex justify-center items-center h-10 p-2 rounded-full text-sm font-bold text-[var(--color-text)]">
            {scene}
          </p>
          <div>
            <h1 className="text-2xl font-bold mb-2">Preferences & Personalization</h1>
            <p className="text-sm font-normal">
              In the Preferences section , users have comprehensive control over their workflow and interface. This centralized hub allows for the customization of key elements, including button visibility, theme selection, and cursor appearance, enabling a truly personalized user experience.        </p>
          </div>
        </div>

        <div className="h-[50px] w-full flex items-start gap-2 justify-end px-6">
          <Button
            variant="outline"
            className="bg-white/50"
            onClick={() => dispatch({ type: "skip" })}
          >
            Skip
          </Button>
          <Button onClick={() => dispatch({ type: "3" })}>Next</Button>
        </div>
      </div>
      <img
        src="scence2.png"
        className="md:w-[50%] w-full h-full object-cover"
      />
    </div>
  );
}


import {todosContext} from './components/TodoList'
import { useContext , useState } from "react";

function Scene3({ setShowStepper }) {

  const {setTodos} = useContext(todosContext)

  const [isValid , setisValid] = useState(false)

  const inputRef = useRef(null);

  const handleImport = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/json") {
      toast.success("Please select a JSON file.")
      return;
    }

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      console.log(data)

      // Validate JSON structure
      const isValid =
        Array.isArray(data) &&
        data.every(
          (item) =>
            typeof item.id === "number" &&
            typeof item.content === "string" &&
            typeof item.modeEdit === "boolean" &&
            typeof item.check === "boolean"
        );  

      if (!isValid) {
        toast.error("Invalid JSON format! Expected [{ id, content, modeEdit, check }, ...]")
        return;
      }

      toast.success("JSON imported successfully!")
      setTodos(data)  
      setisValid(true)

    } catch (err) {
      toast.error("Failed to read JSON file.")
      console.error(err);
    }
  }




  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-300">
      <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <i class="bi bi-filetype-json text-3xl  text-[var(--color-text)] bg-[var(--color-background)] rounded-xl p-2 px-3 "></i>
        </EmptyMedia>
        <EmptyTitle>Restore Your Lists or Start Fresh</EmptyTitle>
        <EmptyDescription>
          No previous to-do lists were found in your account. You can start organizing your tasks by creating your first list, or if you have a saved backup, you can easily restore all your old tasks and lists using the "Import List" option.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          {/* <Button
          variant="outline"
        className="bg-white/50"
            ></Button> */}

          <ConfettiButton  setShowStepper={setShowStepper}>{isValid? "Start" : "New Project" }</ConfettiButton>

          {!isValid &&  <Button variant="secondary" onClick={handleImport}>Import Project</Button>}
          
          <input
            ref={inputRef}
            type="file"
            accept=".json"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

        </div>
      </EmptyContent>

    </Empty>

    </div>
  );
}

// --- Main :


export default function Stepper({ showStepper, setShowStepper }) {
  function reducer(state, action) {
    switch (action.type) {
      case "1":
        return "1";
      case "2":
        return "2";
      case "3":
      case "skip":
        return "3";
      default:
        return state;
    }
  }

  const [scene, dispatch] = useReducer(reducer, "1");

  return (
    <Dialog open={showStepper} onOpenChange={setShowStepper}>
      <DialogContent className="max-w-[785px] bg-gray-300 h-full max-h-[450px] w-[90vw] rounded-3xl p-0 border-none overflow-hidden">
        {scene === "1" && <Scene1 dispatch={dispatch} scene={scene} />}
        {scene === "2" && <Scene2 dispatch={dispatch} scene={scene} />}
        {scene === "3" && <Scene3 setShowStepper={setShowStepper} scene={scene} />}
      </DialogContent>
    </Dialog>
  );
}
