import React, { useState } from "react";
import logoTodo from "../assets/image/todo-logo.png";
import clearCompleted from "../assets/image/clear-complete.png";
import ListTodo from "../components/ListTodo";
const Todos = () => {
  const [valInputTodo, setValInputTodo] = useState({
    title: "",
    id: "",
  });
  const [listTodo, setListTodo] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const handleChangeInputTodo = (e) => {
    const { name, value } = e.target;
    setValInputTodo({
      ...valInputTodo,
      [name]: value,
      id: Date.now(),
    });
  };

  const handleAddTodo = () => {
    setTimeout(() => {
      setListTodo([...listTodo, valInputTodo]);
      setValInputTodo({
        title: "",
      });
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    }, 500);
  };
  return (
    <div className="container mx-auto mt-10   rounded-lg flex justify-center">
      {showAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all">
          Đã thêm công việc!
        </div>
      )}
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
                name="title"
                type="text"
                className="w-full bg-seashell rounded-l-full border-none font-light focus:ring-lightbrown focus:ring-1 p-2 "
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
          {listTodo.map((item) => {
            return <ListTodo key={item.id} item={item} />;
          })}
          {listTodo.length === 0 ? (
            <p className="text-3xl font-light text-center">NO DATA</p>
          ) : (
            <p className="hidden">NO DATA </p>
          )}
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
