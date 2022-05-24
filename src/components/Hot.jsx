import React from "react";
import { useSelector } from "react-redux";
import Mem from "./Mem";
import { selectMem } from "../store/reducers/globalReducer";

const Hot = () => {
  const todos = useSelector(selectMem);
  return (
    <div class="content">
      {todos
        .map((item) => (
          <div key={item.name}>
            <Mem 
              path={item.path}
              upvotes={item.upvotes}
              downvotes={item.downvotes}
              name={item.name}
            />
          </div>
        ))
        .filter(
          (number) =>
            number.props.children.props.upvotes -
              number.props.children.props.downvotes >
            5
        )}
    
    </div>
  );
};

export default Hot;
