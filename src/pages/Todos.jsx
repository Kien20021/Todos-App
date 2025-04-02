import React, { useState } from "react";
import logoTodo from "../assets/image/todo-logo.png";
import clearCompleted from "../assets/image/clear-complete.png";
const Todos = () => {
  const [valInputTodo, setValInputTodo] = useState({
    title: "",
    id: "",
  });
  const [listTodo, setListTodo] = useState([]);
  const handleChangeInputTodo = (e) => {
    const title = e.target.value;
    setValInputTodo({
      ...valInputTodo,
      title,
      id: Date.now(),
    });
  };

  const handleAddTodo = () => {
    setListTodo([...listTodo, valInputTodo]);
    setValInputTodo({
      title: "",
    });
  };
  return (
    <div className="container mx-auto mt-10   rounded-lg flex justify-center">
      <div className="  w-10/12 rounded-lg">
        <div className="flex justify-center p-5 backdrop-blur-md bg-seashell">
          <img src={logoTodo} alt="Logo todos" />
        </div>

        <div className="flex justify-center lg:justify-between mb-6 gap-3">
          <div className="flex justify-center mt-5">
            <div className="w-full flex">
              <input
                onChange={handleChangeInputTodo}
                placeholder="Add todos"
                value={valInputTodo.title}
                type="text"
                className="w-full bg-seashell rounded-l-full border-none  focus:ring-lightbrown focus:ring-1 p-2 "
              />
              <button
                disabled={valInputTodo.title.length === 0 ? true : false}
                onClick={handleAddTodo}
                className={`bg-skyblue text-white font-semibold text-xl py-[10.5px] rounded-r-full px-[20px] ${
                  valInputTodo.title.length === 0
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}>
                ADD
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-full flex">
              <input
                placeholder="Search Todos"
                type="text"
                className="w-full bg-seashell rounded-l-full border-none  focus:ring-lightbrown focus:ring-1 p-2 "
              />
              <button className=" bg-purple-400 text-white font-semibold text-xl py-[10.5px] rounded-r-full px-[18px]">
                SEARCH
              </button>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-md bg-seashell rounded-lg ">
          <div className="flex justify-center  ">
            <div className="w-full  ">
              <div className=" flex justify-between items-center pl-11 pr-12 ">
                <div className="flex items-center   w-full ">
                  <label
                    htmlFor="isCheck"
                    className="w-5 h-5 border-2 border-darkbrown rounded-full  cursor-pointer relative flex items-center justify-center has-[input:checked]:border-lightorange">
                    <input
                      type="checkbox"
                      className="hidden peer"
                      id="isCheck"
                    />
                    <span className="absolute w-5 h-5 flex items-center justify-center opacity-0 transition-opacity duration-200 peer-checked:opacity-100">
                      <i className="fa-solid fa-check text-lightorange text-xs"></i>
                    </span>
                  </label>
                  <p className="font-light  border-b-[1px] w-full py-4 pl-5 border-skyblue ">
                    Professional Work No. 1
                  </p>
                </div>
                <div className=" flex gap-3 my-6 ">
                  <button className="hover:text-red-600 text-brown">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className="hover:text-red-600 text-reddele">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  ">
            <div className="w-full  ">
              <div className=" flex justify-between items-center pl-11 pr-12 ">
                <div className="flex items-center   w-full ">
                  <label
                    htmlFor="isCheck2"
                    className="w-5 h-5 border-2 rounded-full border-darkbrown cursor-pointer relative flex items-center justify-center has-[input:checked]:border-lightorange ">
                    <input
                      type="checkbox"
                      className="hidden peer "
                      id="isCheck2"
                    />
                    <span className="absolute w-5 h-5 flex items-center justify-center opacity-0 transition-opacity duration-200 peer-checked:opacity-100 ">
                      <i className="fa-solid fa-check text-lightorange text-xs"></i>
                    </span>
                  </label>
                  <p className="font-light  border-b-[1px] w-full py-4 pl-5 border-skyblue ">
                    Professional Work No. 1
                  </p>
                </div>
                <div className=" flex gap-3 my-6">
                  <button className="hover:text-red-600 text-brown">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className="hover:text-red-600 text-reddele">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center gap-2 mr-[76px] mt-[77px]">
            <div>
              <img src={clearCompleted} alt=" Clear Completed" />
            </div>
            <p className="text-[24px] text-lightorange py-5 ">
              Clear Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
