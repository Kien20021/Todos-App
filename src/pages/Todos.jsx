import React, { useState } from "react";
import logoTodo from "../assets/image/todo-logo.png";
const Todos = () => {
  const [valInputTodo, setValInputTodo] = useState({
    title: "",
  });
  const [listTodo, setListTodo] = useState([]);
  const handleChangeInputTodo = (e) => {
    const title = e.target.value;
    setValInputTodo({
      ...valInputTodo,
      title,
    });
  };

  const handleAddTodo = () => {
    setListTodo([...listTodo, valInputTodo]);
    setValInputTodo({
      title: "",
    });
  };

  return (
    <div className="container">
      <div className="logoTodos py-5 flex justify-center ">
        <img className="size-15" src={logoTodo} alt="Todo Logo" />
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-10/12 flex">
          <input
            onChange={handleChangeInputTodo}
            placeholder="Add todos"
            value={valInputTodo.title}
            type="text"
            className="w-full rounded-l-full  border-2 border-orange-200 border-solid p-2 "
          />
          <button
            disabled={valInputTodo.title.length === 0 ? true : false}
            onClick={handleAddTodo}
            className={`btn-add text-white py-[10.5px] rounded-r-full px-[27px] ${
              valInputTodo.title.length === 0
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}>
            Add
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-10/12 flex">
          <input
            placeholder="Search Todos"
            type="text"
            className="w-full rounded-l-full  border-2 border-orange-200 border-solid p-2 "
          />
          <button className=" bg-purple-400 text-white py-[10.5px] rounded-r-full px-[18px]">
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-3">
        <div className="w-10/12 render-todo">
          <div className=" flex justify-between items-center py-5 px-5 border-b-2 border-blue-300">
            <input type="checkbox" name="" id="" />
            <p>Cong viec 1</p>
            <div className=" flex gap-2">
              <button className="bg-green-200 p-1 rounded-lg">Edit</button>
              <button className="bg-red-300 p-1 rounded-lg">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
