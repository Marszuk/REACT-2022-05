import React from "react"
import { useDispatch } from "react-redux"

const Mem = ({name, path, upvotes, downvotes}) => {
    const dispatch = useDispatch();
    
    const upvote = ()=> 
    {
        const action = {type:"COMPLETE_TODO", name}
        dispatch(action)
    } 

    const downvote = ()=> 
    {
        const action = {type:"COMPLETE_TODO2", name}
        dispatch(action)
    } 

    return (
        <div className="memFrame" key={name}>{name}<br/>
            <img className="img" src={path}/><br/>
            <button onClick={upvote}>+</button>
            <button>{upvotes}</button>
            <button onClick={downvote}>-</button>
            <button>{downvotes}</button>
        </div>      
     );

}

export default Mem