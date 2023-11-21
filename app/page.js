"use client";
import React, { useState } from "react";

const page = () => {
  //two way binding
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [allTask, setAllTask] = useState([]);
  let taskRenderer;

  const listHandler = (e) => {
    e.preventDefault();
    setAllTask([...allTask, { task, desc }]);
    setTask("");
    setDesc("");
  };

  const taskHandler = (e) => {
    const input = e.target.value
    if(input == " "){
      console.error("cannot")
    }else{
      setTask(input);
    }
  }

  const descHandler = (e) => {
    const input = e.target.value
    if(input == " "){
      console.error("cannot")
    }else{
      setDesc(input);
    }
  }

  const deleteHandler = (tIndex) => {
    const deleteTask = ([...allTask]);
    deleteTask.splice(tIndex,1);
    setAllTask(deleteTask);
   }

  if (allTask.length == 0) {
  taskRenderer = <p className="flex justify-center">no task added</p>
}else{
  taskRenderer = allTask.map((t, tIndex) => {
    return (
    <li key={tIndex} ><div className="flex justify-between">
          <p>
            {tIndex + 1}. {t.task}
          </p>
          <p>{t.desc}</p>
          <button className="w-[120px] py-[1.5vh] bg-Teal border-[2px] border-Black rounded-md hover:border-Space hover:text-Space  duration-500 mb-[10px] " onClick={() => deleteHandler(tIndex)} >Delete</button>
        </div>
        </li>)
  });

}

  
   
  return (
    <>
      <div className=" font-roboto text-Teal py-[4vh] flex items-center bg-Grey text-2xl px-[5%] cursor-pointer hover:text-Space justify-center">
        Todo List
      </div>
      <div className="font-roboto flex flex-col justify-center items-center  mt-[6vh] ">
        <form className="flex flex-col items-center" onSubmit={listHandler}>
          <div
            id="inputOutLine"
            className="overflow-hidden w-[250px] py-[1vh] border-2  hover:border-Teal rounded-md"
          >
            <input
              id="task"
              className="w-[250px] py-[1vh]  pl-[10px] outline-none bg-Space text-Teal"
              placeholder="Task..."
              onChange={(e) =>taskHandler(e)}
              value={task}
              minLength="3"
              maxLength="20"
              required
            />
          </div>
          <div
            id="inputOutLine"
            className=" overflow-hidden w-[250px] py-[1vh] border-2  hover:border-Teal  rounded-md mt-[2vh]"
          >
            <input
              id="desc"
              className="w-[250px] py-[1vh] pl-[10px] outline-none bg-Space text-Teal"
              placeholder="Description..."
              onChange={(e) => descHandler(e)}
              required
              value={desc}
            />
          </div>
          <button className="w-[120px] py-[1.5vh] bg-Teal border-[2px] border-Black rounded-md mt-[3.5vh] hover:border-Space hover:text-Space  duration-500 flex justify-center ">
            Add-List
          </button>
        </form>
        <div className="Tasks border-2 border-Black w-[80vw] rounded-md h-[10%] mt-[4vh] py-[5%] px-[5%]">
          <ul>{taskRenderer}
          </ul>

        </div>
      </div>
    </>
  );
};

export default page;
