import React, { useEffect, useState } from "react";

import clearCompleted from "../assets/image/clear-complete.png";
import ItemTodo from "../components/ItemTodo";
import Alerts from "../components/alerts/Alerts";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  fetchDataTodo,
} from "../features/Todo/listTodoSlice";
import {
  setOffShowAlerts,
  setOnShowAlerts,
} from "../features/alerts/alertSlice";
const Todos = () => {
  const totalStatus = {
    success: { message: "Them Thanh Cong", type: "success" },
    error: { message: "That bai", type: "error" },
    warning: { message: "Canh bao", type: "warning" },
    info: { message: "Thong tin", type: "info" },
  };
  const [valInputTodo, setValInputTodo] = useState({
    title: "",
    completed: false,
    deleted: false,
  });
  const [valFilterTodo, setValFilterTodo] = useState({
    title: "",
  });
  const listTodo = useSelector((state) => state.listTodo.data);
  const showAlert = useSelector((state) => state.showAlert.showAlert);
  const [inforAlerts, setInforAlerts] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);
  const dispatch = useDispatch();
  const handleChangeInputTodo = (e) => {
    const { name, value } = e.target;
    setValInputTodo({
      ...valInputTodo,
      [name]: value,
    });
  };
  const handleChangeFilterTodo = (e) => {
    const { name, value } = e.target;
    setValFilterTodo({
      ...valFilterTodo,
      [name]: value,
    });
  };
  const handleFilterTodo = (valFilterTodo) => {
    dispatch(fetchDataTodo({ ...valFilterTodo, deleted: false }));
  };
  const handleAddTodo = () => {
    if (valInputTodo.title.trim() === "") return;
    dispatch(addTodo(valInputTodo));
    dispatch(setOnShowAlerts());
    setInforAlerts(totalStatus.success);
    setValInputTodo({
      title: "",
    });
  };
  const handleEditTodo = async (data) => {
    await dispatch(editTodo(data));
    dispatch(fetchDataTodo());
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleToggleChecked = async (data) => {
    setCheckedItems((prev) =>
      prev.includes(data.id)
        ? prev.filter((itemId) => itemId !== data.id)
        : [...prev, data.id]
    );
    await dispatch(editTodo({ ...data, completed: !data.completed }));
    dispatch(fetchDataTodo());
  };
  const handleClearTodosCompleted = async () => {
    for (let id of checkedItems) {
      await dispatch(editTodo({ id, deleted: true }));
      dispatch(fetchDataTodo({ deleted: false }));
    }
  };
  const syncCheckedItems = (todos = []) => {
    const listChecked = [];
    todos.forEach((item) => {
      if (item.completed == true) {
        listChecked.push(item.id);
      }
    });
    setCheckedItems(listChecked);
  };
  useEffect(() => {
    syncCheckedItems(listTodo);
  }, [listTodo]);

  useEffect(() => {
    dispatch(fetchDataTodo({ deleted: false }));
  }, []);
  return (
    <div className="container mx-auto mt-5   rounded-lg flex justify-center">
      {showAlert && (
        <Alerts
          message={inforAlerts.message}
          type={inforAlerts.type}
          onClose={() => dispatch(setOffShowAlerts())}
        />
      )}
      <div className="  w-10/12 rounded-lg">
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
                name="title"
                onChange={handleChangeFilterTodo}
                placeholder="Search Todos"
                type="text"
                className="w-full bg-seashell rounded-l-full border-inherit focus:border focus:border-purple-400 font-light focus:ring-0  focus:outline-none p-2 px-5 "
              />
              <button
                onClick={() => handleFilterTodo(valFilterTodo)}
                className=" bg-purple-400 text-white font-semibold text-xl py-[10.5px] rounded-r-full px-[18px]">
                SEARCH
              </button>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-md bg-seashell rounded-lg ">
          {listTodo?.map((item) => {
            return (
              <ItemTodo
                onEditTodo={handleEditTodo}
                onDeleteTodo={handleDeleteTodo}
                onToggleChecked={handleToggleChecked}
                key={item.id}
                item={item}
              />
            );
          })}
          {listTodo?.length === 0 && (
            <p className="text-3xl font-light text-center pt-10">NO DATA</p>
          )}
          <div className="mr-[76px]  ml-11 mt-[77px] flex items-center justify-between">
            <div>
              <NavLink
                to={"/detail"}
                className=" text-lightorange p-3 rounded-lg hover:bg-lightorange hover:text-white transition-all ">
                History Delete
              </NavLink>
            </div>
            <div
              onClick={handleClearTodosCompleted}
              className={`flex justify-end items-center gap-2  cursor-pointer ${
                checkedItems.length === 0 && "disabled"
              } `}>
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
    </div>
  );
};

export default Todos;
