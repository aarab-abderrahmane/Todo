import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Spinner } from "./ui/spinner"

import { useEffect , useRef, useState } from "react"

export function AlertConfrim({showConfirm, setshowConfirm,confirmDelete}) {

  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  function handleDeleteClick() {

    setLoading(true);
    timerRef.current = setTimeout(() => {
      confirmDelete()
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


  return (
    <Dialog  open={showConfirm} onOpenChange={setshowConfirm} >
      <form>

        <DialogContent className="max-w-[85vw] max-w-[450px] bg-white/70  flex flex-col overflow-x-hidden">
          <DialogHeader>
            <DialogTitle>Clear Everything ⚠️</DialogTitle>
            <DialogDescription>
              You are about to delete all your todos and reset the application to its initial state. All your progress will be lost.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            {loading?(
                  <Button disabled variant="danger" className="bg-red-700 text-white border-red-800 border-2 " >
                    <Spinner />
                    Deleting...
                  </Button>
            ):(
                <Button variant="danger"   onClick={handleDeleteClick}>Confirm</Button>
            )}

          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
