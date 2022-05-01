import Input from "../../components/Input";

const initialState =  {
  todos : [
    {
    name: "Mem1",
    path: "./pictures/pizza.jpg",
    upvotes: 0,
    downvotes: 0},
    {
    name: "Mem2",
    path:"./pictures/kaczynski.jpg",
    upvotes: 0,
    downvotes: 0},
    {
    name: "Mem3",
    path: "./pictures/putin.jpg",
    upvotes: 0,
    downvotes: 0} ]
};
  export const MemReducer = (state = initialState, action, props) => {
    
    
    switch (action.type) {
      case "COMPLETE_TODO": {
        const index = state.todos.findIndex(todo => todo.name === action.name); 
        const newArray = [...state.todos]; 
        newArray[index].upvotes = state.todos[index].upvotes + 1
        return { 
         ...state, //copying the orignal state
         todos: newArray, //reassingning todos to new array
        }
       }
      case "COMPLETE_TODO2": {
        const index = state.todos.findIndex(todo => todo.name === action.name); 
        const newArray = [...state.todos]; 
        newArray[index].downvotes = state.todos[index].downvotes + 1
        return { 
         ...state, //copying the orignal state
         todos: newArray, //reassingning todos to new array
        }
       }
       
       case "COMPLETE_TODO3": {
    
        const newArray = [...state.todos, {
          name: action.title,
          path: action.path,
          upvotes: 0,
          downvotes: 0}]; 
        
      
        return { 
         ...state, //copying the orignal state
         todos: newArray, //reassingning todos to new array
        }
       }
      default: {
        return state;
      }
    }
  };

  export const selectMem = state => state.todos
