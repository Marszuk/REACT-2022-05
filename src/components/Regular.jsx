import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import Mem from './Mem'
import { MemReducer } from "../store/reducers/globalReducer"
import { selectMem } from "../store/reducers/globalReducer"



const Regular = () => {
    const todos = useSelector(selectMem)
    return (
            <div> 
              {
        todos.map(item => (<div><Mem path={item.path} upvotes={item.upvotes} downvotes={item.downvotes} name={item.name}/></div>))
      }
            </div>
        
    )
}

export default Regular