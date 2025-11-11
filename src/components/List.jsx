import React from 'react'
import PropTypes from "prop-types";


import Checkbox from './Checkbox'
import {  useState ,useContext} from 'react'
import {todosContext} from './TodoList'
import {Trash2Icon} from './ui/icons/Trash2Icon'
import { CodeXmlIcon  } from './ui/icons/CodeXmlIcon'
import {CircleCheckIcon} from './ui/icons/CircleCheckIcon'
import {PreferencesContext} from '../App'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {InView} from './ui/in-view'


const List = ({id,content,modeEdit,check,mask})=>{



    const {attributes,listeners,setNodeRef,
        transform
        }=useSortable({id})

    const style = {
        transition: "0.6s transform ease",
        transform : CSS.Transform.toString(transform),
        borderWidth:"2px",boxShadow:"none"
    }

    const {PreferencesSettings} = useContext(PreferencesContext)
    const buttons = PreferencesSettings.buttons
    const {handleCheck,handleEdit,handleSave,hanldeDelete,MaskTodo} = useContext(todosContext)

    const [todoContent , setTodoContent] = useState(content)

    function verify(){

        if(todoContent.trim().length<4){
            setTodoContent(content)
        }

        handleSave(id,todoContent)


    }

    return (

            

            <InView>
            <li 
            ref={setNodeRef}    
            className="glass applyRadius  bg-white/30  flex items-center  overflow-x-hidden  px-4 py-2 h-[60px] overflow-y-hidden group  md:hover:scale-[1.04] " 
            style={style}   >
                <i {...attributes} {...listeners} className="bi bi-grip-vertical absolute left-1 group-hover:block hidden text-xl cursor-pointer "></i>
                <input id={id} className={`
                    w-[80%]   ms-2 font-medium text-[var(--color-text)] bg-transparent  outline-none decoration-[var(--color-text)] decoration-2 
                    ${mask ? "blurred" : ""}
                    ${check? "line-through" : ""}`} disabled={check || !modeEdit} value={todoContent} onChange={(e)=>setTodoContent(e.target.value)}></input>
                <div className="flex  items-center justify-end gap-3  w-[110px]  ">
                    
                    
                    {!mask && (
                            <>
                            < CodeXmlIcon  size={25} duration={0.5}  class={` text-[var(--color-text)]  hidden ${check || modeEdit || !buttons?.buttonEdit.active ? "" : "group-hover:block" }`} onClick={()=>handleEdit(id)}/>
                                
                                <Trash2Icon  size={25} duration={0.5} onClick={()=>hanldeDelete(id)} class={` cursor-pointer text-red-600  hidden ${ modeEdit || !buttons?.buttonDelete.active ? "" : "group-hover:block" } `}  />
                                <CircleCheckIcon  size={30} duration={0.5} class={`rounded-full  cursor-pointer hidden text-[var(--color-text)]  ${check || !modeEdit ? "" : "group-hover:block"} `}  onClick={verify} />

                                {!modeEdit && <Checkbox   id={id}  check={check} handleCheck={handleCheck} modeEdit={modeEdit} />}
                    </>
                    )}

                    {mask && (<i className="bi bi-eye-slash text-2xl cursor-pointer hidden text-[var(--color-text)] group-hover:block" onClick={()=>MaskTodo(id)}></i>)}

                </div>
                
            </li>
            </InView>

    )

}

List.propTypes = {
    id : PropTypes.number , 
    content : PropTypes.string , 
    modeEdit : PropTypes.bool , 
    check : PropTypes.bool , 
    mask : PropTypes.bool
}

export default List 