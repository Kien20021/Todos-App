import React, { useEffect, useState } from "react";
import logoTodo from "../assets/image/todo-logo.png";
import clearCompleted from "../assets/image/clear-complete.png";

import ItemTodo from "../components/ItemTodo";
import Alerts from "../components/alerts/Alerts";
import ApiServiceTodos from "../services/ApiTodos";
const Todos = () => {
  const totalStatus = {
    success: { message: "Them Thanh Cong", type: "success" },
    error: { message: "That bai", type: "error" },
    warning: { message: "Canh bao", type: "warning" },
    info: { message: "Thong tin", type: "info" },
  };
  const [valInputTodo, setValInputTodo] = useState({
    title: "",
  });
  const [listTodo, setListTodo] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const [inforAlerts, setInforAlerts] = useState({});

  const handleChangeInputTodo = (e) => {
    const { name, value } = e.target;
    setValInputTodo({
      ...valInputTodo,
      [name]: value,
    });
  };
  const handleAddTodo = async () => {
    const res = await ApiServiceTodos.apiPostTodo(valInputTodo);
    if (res.status === 201) {
      fetchDataTodo();
      setShowAlert(true);
      setInforAlerts(totalStatus.success);
      setValInputTodo({
        title: "",
      });
    }
  };
  const fetchDataTodo = async () => {
    const res = await ApiServiceTodos.apiGetTodo();
    if (res.status === 200) {
      setListTodo(res.data);
    }
  };
  useEffect(() => {
    fetchDataTodo();
  }, []);
  return (
    <div className="container mx-auto mt-20   rounded-lg flex justify-center">
      {showAlert && (
        <Alerts
          message={inforAlerts.message}
          type={inforAlerts.type}
          onClose={() => setShowAlert(false)}
        />
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
                className="w-full bg-seashell rounded-l-full border-inherit focus:border focus:border-skyblue font-light focus:ring-0  focus:outline-none p-2 px-5 "
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
                className="w-full bg-seashell rounded-l-full border-inherit focus:border focus:border-purple-400 font-light focus:ring-0  focus:outline-none p-2 px-5 "
              />
              <button className=" bg-purple-400 text-white font-semibold text-xl py-[10.5px] rounded-r-full px-[18px]">
                SEARCH
              </button>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-md bg-seashell rounded-lg ">
          {listTodo.map((item) => {
            return <ItemTodo key={item.id} item={item} />;
          })}
          {listTodo.length === 0 && (
            <p className="text-3xl font-light text-center pt-10">NO DATA</p>
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
