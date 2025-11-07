import {todosContext} from './components/TodoList'
import { useContext , useState ,useEffect,useRef} from "react";
import { toast } from "sonner" 
import {ConfettiButton} from './components/ui/confetti'
import { ArrowUpRightIcon } from "lucide-react"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./components/ui/empty"
import { Spinner } from "./components/ui/spinner"
import { TextEffect } from './components/ui/text-effect';
import { Button } from "./components/ui/button";


function TitleEffect({children}){

  return (
    <TextEffect
        per='char'
        delay={0.5}
        variants={{
          container: {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              rotateX: 90,
              y: 10,
            },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          },
        }}
      >
        {children}
      </TextEffect>
  )
}

export function ImportDataSection() {

 

  const {setTodos} = useContext(todosContext)

  const [isValid , setisValid] = useState(false)
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
      return () => {
        // cleanup timer on unmount
        if (timerRef.current) clearTimeout(timerRef.current);
      };
  }, []);
  

  const handleImport = () => {
      inputRef.current.click();

        
  };



  const handleFileChange = async (event) => {
    
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/json") {
      toast.success("Please select a JSON file.");
      return;
    }

    setLoading(true)
    setTimeout(async () => {
      try {
        const text = await file.text();
        const data = JSON.parse(text);


        const isValid =
          Array.isArray(data) &&
          data.every(
            (item) =>
              typeof item.id === "number" &&
              typeof item.content === "string" &&
              typeof item.modeEdit === "boolean" &&
              typeof item.check === "boolean" &&
              typeof item.mask === "boolean"

          );

        if (!isValid) {
          toast.error("Invalid JSON format! Expected [{ id, content, modeEdit, check, mask }, ...]");
          return;
        }

        toast.success("JSON imported successfully!");
        setTodos(data);
        setisValid(true);

      } catch (err) {
        toast.error("Failed to read JSON file.");
        console.error(err);
      }

      setLoading(false)
      }, 3000)

    };




  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-300">
      <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <i class="bi bi-filetype-json text-3xl  text-[var(--color-text)] bg-[var(--color-background)] rounded-xl p-2 px-3 "></i>
        </EmptyMedia>
        <EmptyTitle>Restore Your Tasks from Backup</EmptyTitle>
        <EmptyDescription>
           <TextEffect per='char' preset='fade' speedReveal={2.5}>
          Easily bring back your saved to-do lists from a previous session. Upload your exported JSON file to instantly restore all your tasks, progress, and preferences — so you can pick up right where you left off.           </TextEffect>
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex flex-col sm:flex-row  gap-2 items-center">


          {!isValid && ( 

            loading ? (
                <Button variant="secondary" disabled size="lg">
                                    <Spinner />
                                    <span className="ml-2">Please wait...</span>
                </Button>
            ):(
             <Button variant="secondary" onClick={handleImport}>Import Project</Button>

            )
            
          )}

          
          
          <input
            ref={inputRef}
            type="file"
            accept=".json"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

        </div>
        <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
        >
        <a href="https://github.com/aarab-abderrahmane/Todo" target="Blank">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
      </EmptyContent>

    </Empty>

    </div>
  );
}
