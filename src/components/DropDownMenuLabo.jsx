import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Button } from "./ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { useState, useContext } from "react"; // Add useContext
import { todosContext } from "./TodoList"; // Import the context

// import CodeBlockDemo from "./CodeBlockDemo";
import { CodeBlock } from "./ui/codeblock";
import {AlertConfrim} from './AlertConfirm';
import {Preferences} from './Preferences'

import { Kbd, KbdGroup } from "./ui/kbd"
import{useEffect,useRef} from 'react'
import { Spinner } from "./ui/spinner"    

import {PreferencesContext} from '../App'


import { Badge } from "./ui/badge"

import {ImportDataSection} from '../ImportDataSection'


export default function DropdownMenuLabo() {
  
  const[showPreferences , setShowPreferences] = useState(false)
  const [showUploadData, setShowUploadData] = useState(false);
  const [showConfirm , setshowConfirm] = useState(false)
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  function resetStorage() {
    localStorage.setItem("todos", JSON.stringify([]));
    window.location.reload();
  }


  const { todos } = useContext(todosContext);
  

  const Code = `
  [

    ${todos?.map(item => JSON.stringify(item)).join(',\n')} 

  ]`

  function handleDownloadClick() {

    setLoading(true);
    timerRef.current = setTimeout(() => {
      downloadTodos()
      setLoading(false);
      timerRef.current = null;
    }, 3000);
  }

  useEffect(() => {
    return () => {
      // cleanup timer on unmount
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function downloadTodos(){

    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 7000); 


    if(!todos || todos.length<1){
        alert('No todos found in localStorage!')
        return 
    }

    try{


        const jsonString = JSON.stringify(todos, null, 2);

        // Create download
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Create filename with timestamp
        const now = new Date();
        const timestamp = now.toISOString().replace(/[:.]/g, '-');
        const filename = `todos-export-${timestamp}.json`;

        // Trigger download
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);


    }catch(error){
        console.error(error)
    }

  }

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(()=>{
        const handler = (e) => {
          if (e.ctrlKey && e.key.toLowerCase() === 'b') {
            e.preventDefault()
            setShowPreferences((prev) => !prev)
          
          }else if(e.ctrlKey && e.key.toLowerCase() === 'y'){
            activeCustomizeLayout()
          }
        }

         window.addEventListener('keydown', handler)
         return () => window.removeEventListener('keydown', handler)
  },[])


  const {setPreferencesSettings,PreferencesSettings} = useContext(PreferencesContext)
  function activeCustomizeLayout(){
      // setPreferencesSettings(prev=>({...prev,customizeActive:true}))
      setPreferencesSettings(prev=>({...prev,customizeLayout:{...prev.customizeLayout,active:true}}))

  }

  return (
    <>
      <DropdownMenu modal={false} >
        <DropdownMenuTrigger asChild>
          <Button variant="default" aria-label="Open menu" size="icon-lg ">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[80vw] lg:w-[50vw] max-w-[300px] rounded-xl border border-[var(--color-text)]  " align="end" >
          <DropdownMenuLabel className="p-3 bg-[var(--color-background)] text-[var(--color-text)]" >Actions</DropdownMenuLabel>
          <DropdownMenuGroup className="">
            <DropdownMenuSeparator className='h-[1px] bg-[var(--color-text)]'/>

            <DropdownMenuItem className="p-3 flex justify-between" onSelect={()=>setShowPreferences(true)}>
            <div >
                <i class="bi bi-transparency text-xl font-black me-2 text-[var(--color-text)]"></i>         
                Preferences
            </div>

            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>B</Kbd>
            </KbdGroup>

            </DropdownMenuItem>

            <DropdownMenuSeparator className='font-bold h-[1px] bg-[var(--color-text)]'/>


            <DropdownMenuItem disabled={PreferencesSettings.customizeLayout.active} className="p-3 justify-between" onSelect={activeCustomizeLayout}>
              <div>
                <i class="bi bi-columns-gap text-xl font-black me-2 text-[var(--color-text)]"></i>
                Customize Layout
              </div>

              <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>Y</Kbd>
              </KbdGroup>

            </DropdownMenuItem>



            <DropdownMenuSeparator  className='font-bold h-[1px] bg-[var(--color-text)]' />

            <DropdownMenuSub  >
              <DropdownMenuSubTrigger  className="p-3 outline-none  p-3  focus:bg-[var(--color-background)] " >
                <i class="bi bi-database-fill text-xl font-black text-[var(--color-text)]"></i>
                Move Data
                </DropdownMenuSubTrigger>
              <DropdownMenuPortal >
                <DropdownMenuSubContent className="bg-[var(--color-secondary)] border border-[var(--color-text)]">
                  <DropdownMenuItem className="p-3"  onSelect={()=>setShowUploadData(true)}>
                    <i class="bi bi-box-arrow-down text-xl font-black text-[var(--color-text)]" ></i>
                      Import 
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className='font-bold h-[1px] bg-[var(--color-text)]'/>

                  <DropdownMenuItem className="p-3" disabled={todos.length>0 ? false : true} onSelect={()=>setOpenDialog(true)}>
                    <i class="bi bi-box-arrow-in-up text-xl font-black text-[var(--color-text)]"></i>
                      Export
                  </DropdownMenuItem>
                  
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>



            <DropdownMenuSeparator  className='font-bold h-[1px] bg-[var(--color-text)]' />

            <DropdownMenuItem className="text-red-500 p-3 font-bold focus:bg-red-200  justify-between " disabled={todos.length===0 ? true : false} onSelect={()=>setshowConfirm(true)}>
              <div>
              <i class="bi bi-arrow-repeat text-xl font-black !important  pe-2  " ></i>
                Reset
              </div>

              {todos.length===0 && <Badge variant="outline">No data found..</Badge>}
            </DropdownMenuItem>
            
            <DropdownMenuSeparator  className='font-bold h-[1px] bg-[var(--color-text)]' />


             <DropdownMenuItem className="flex justify-between w-full  " >
                <h1 className="font-medium">About me :</h1>
                <div className="text-red-500 p-3 font-bold  flex justify-center gap-6">

                  <a href='https://github.com/aarab-abderrahmane' target="_blank" >
                  <img className="size-6 " src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />

                  </a>

                              
                  <a href='https://www.linkedin.com/in/aarab-abderrahmane-2b9509336/' target="_blank" >

                  <img className="size-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                  </a>
                </div>

            </DropdownMenuItem>

          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>


      <Preferences showPreferences={showPreferences} setShowPreferences={setShowPreferences}/>

      <AlertConfrim showConfirm={showConfirm} setshowConfirm={setshowConfirm} confirmDelete={resetStorage}  />



      <Dialog open={openDialog} onOpenChange={setOpenDialog} >
        <form>
          <DialogContent className=" backdrop-blur-md border-2 bg-white/60 rounded-3xl max-w-[80vw]  md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] flex flex-col overflow-x-hidden">
            <DialogHeader>
              <DialogTitle>Export Data</DialogTitle>
              <DialogDescription>
                Copy your Data OR Download it :
              </DialogDescription>
            </DialogHeader>


              
            <div>
                {/* <div >
                <CodeBlockDemo code={Code} language="json"  />
                </div> */}
                <CodeBlock
                  language="typescript"
                  filename="todos.json"
                  tabs={[
                    { name: 'todos.json', code: Code, language: 'json' }
                  ]}
                  // breadcrumb={['src', 'components']}
                  // breadcrumb={['todos.json']}
                />
            </div>




            <DialogFooter className=" w-full flex flex-col md:flex-row">
              <DialogClose asChild>
                <Button variant="outline" size="lg">Cancel</Button>
              </DialogClose>

                  {loading ? (
                        <Button variant="secondary" disabled size="lg">
                          <Spinner />
                          <span className="ml-2">Please wait...</span>
                        </Button>
                      ) : (
                        <Button variant="secondary" size="lg"  onClick={handleDownloadClick}>
                          Download JSON
                        </Button> 
                  )}

            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      {/* Upload section  */}
      <Dialog open={showUploadData} onOpenChange={setShowUploadData}>
        <DialogContent className="max-w-[785px] max-h-[90vh] bg-gray-300 h-full md:max-h-[450px] w-[90vw] rounded-3xl p-0 border-none overflow-y-scroll md:overflow-hidden ">
              <ImportDataSection   />
        </DialogContent>
      </Dialog>
    </>
  );
}
