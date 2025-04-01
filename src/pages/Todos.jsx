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
    <div className="container mx-auto mt-10   rounded-lg flex justify-center">
      <div className="  w-10/12 rounded-lg">
        <div className="flex justify-center p-5 backdrop-blur-md bg-seashell">
          <img src={logoTodo} alt="Logo todos" />
        </div>

        <div className="flex justify-center mb-6 gap-3">
          <div className="flex justify-center mt-5">
            <div className="w-full flex">
              <input
                onChange={handleChangeInputTodo}
                placeholder="Add todos"
                value={valInputTodo.title}
                type="text"
                className="w-full bg-seashell rounded-l-full border-none  focus:ring-lightbrown focus:ring-2 p-2 "
              />
              <button
                disabled={valInputTodo.title.length === 0 ? true : false}
                onClick={handleAddTodo}
                className={`bg-skyblue text-white py-[10.5px] rounded-r-full px-[27px] ${
                  valInputTodo.title.length === 0
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}>
                Add
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-full flex">
              <input
                placeholder="Search Todos"
                type="text"
                className="w-full bg-seashell rounded-l-full border-none  focus:ring-lightbrown focus:ring-2 p-2 "
              />
              <button className=" bg-purple-400 text-white py-[10.5px] rounded-r-full px-[18px]">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-md bg-seashell rounded-lg pb-8">
          <div className="flex justify-center  ">
            <div className="w-full  ">
              <div className=" flex justify-between items-center px-5 pt-5 ">
                <div className="flex items-center gap-5  w-10/12 ">
                  <input
                    type="checkbox"
                    className="form-checkbox text-brown border-gray-300 rounded-lg focus:ring-brown"
                  />
                  <p className="font-light  border-b-[1px] w-full border-skyblue">
                    Cong viec 1
                  </p>
                </div>
                <div className=" flex gap-3 mt-[5px]">
                  <button className="hover:text-red-600 text-brown">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className="hover:text-red-600 text-brown">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  ">
            <div className="w-full ">
              <div className=" flex justify-between items-center px-5 pt-5  ">
                <div className="flex items-center gap-5  w-10/12">
                  <input
                    type="checkbox"
                    className="form-checkbox text-brown border-gray-300 rounded-lg focus:ring-brown"
                  />
                  <p className="font-light  border-b-[1px] w-full border-skyblue ">
                    Cong viec 1
                  </p>
                </div>
                <div className=" flex gap-3 justify-end mt-[5px]">
                  <button className="hover:text-red-600 text-brown ">
                    <i className=" fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className="hover:text-red-600  text-brown">
                    <i className="h-full fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
