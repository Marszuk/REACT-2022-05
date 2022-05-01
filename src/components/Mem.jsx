import React from "react"
import { useDispatch } from "react-redux"

const Mem = (props) => {
    const dispatch = useDispatch();
    
    const upvote = ()=> 
    {
        const action = {type:"COMPLETE_TODO", name:props.name}
        dispatch(action)
    } 

    const downvote = ()=> 
    {
        const action = {type:"COMPLETE_TODO2", name:props.name}
        dispatch(action)
    } 

    return (
        <div className="memFrame" key={props.name}>{props.name}
            <img className="img" src={props.path}/>
            <button onClick={upvote}>+</button>
            <button>{props.upvotes}</button>
            <button onClick={downvote}>-</button>
            <button>{props.downvotes}</button>
        </div>      
     );

}

export default Mem