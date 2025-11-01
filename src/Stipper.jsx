import { Button } from "./components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"



export default function Stipper({showStepper,setShowStepper}){




    return (


    <Dialog open={showStepper} onOpenChange={setShowStepper}  >

        <DialogContent  className="max-w-[785px] bg-transparent h-full max-h-[450px] w-[90vw] rounded-3xl p-0 !important overflow-hidden  border-none">

          
            <Scence1/>



        </DialogContent>
    </Dialog>


    )


}

export function Scence1(){

    return (

        <div className="w-full h-full flex flex-col-reverse md:flex-row ">
               <div className="flex-1 flex flex-col justify-between h-full bg-gray-300">

                <div className="flex-1 p-6 flex flex-col items-start gap-12">

                    <p className="bg-[var(--color-background)] p-2 rounded-xl text-sm text-[var(--color-text)]">Welcome</p>
                    <div>

                        <h1 className="text-2xl font-bold mb-2">Welcome to TodoFlow</h1>
                        <p className="text-sm font-semibold">This Todo app helps you stay organized and productive by managing your daily tasks in one place. You can easily create, edit, and delete tasks. With a clean and responsive interface built using React and Vite, it provides a smooth user experience on any device. Whether for personal use or work planning, this project offers a simple and efficient way to keep your goals clear and your workflow focused.</p>
                    </div>

                </div>
                        <div className="h-[50px] w-full flex items-start gap-2 justify-end px-6 ">
                                <Button  variant="outline" className="bg-white/50" >Skip</Button>
                                <Button   >Next</Button>
                        </div>
               </div>       
               <img src="logo.png" className="md:w-[50%] w-full h-full object-cover"></img>     
              
        </div>
    )
}