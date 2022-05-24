import React from "react";
import { useDispatch } from "react-redux";
import { MemReducer } from "../store/reducers/globalReducer";
import { useState } from "react";

const Input = () => {
  const dispatch = useDispatch();

  const addMem = () => {
    const action = { type: "COMPLETE_TODO3", title: title, path: path };
    dispatch(action);
  };

  const [title, setTitle] = useState("");
  const [path, setPath] = useState("");

  const path1 = "./pictures/morze.jpg";
  const path2 = "./pictures/kumple.jpg";
  const path3 = "./pictures/kartofle.jpg";
  const path4 = "./pictures/mieszkanie.jpg";
  const path5 = "./pictures/przyjaciel.jpg";

  return (
    <div class="content">
      <div className="create">
        Write Mem Title
        <input
          className="input1"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label className="label">
          Choose a topic
          <select
            className="select"
            onChange={(event) => setPath(event.target.value)}
          >
            <option>Option</option>
            <option value={path1}>Sea</option>
            <option value={path2}>Buddy</option>
            <option value={path3}>Potatoes</option>
            <option value={path4}>Apartment</option>
            <option value={path5}>Friend</option>
          </select>
        </label>
        <button className="buttoncreate" onClick={addMem}>
          Create Mem
        </button>
      </div>
    </div>
  );
};

export default Input;
