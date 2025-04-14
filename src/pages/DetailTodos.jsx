import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { editTodo, fetchDataTodo } from "../features/Todo/listTodoSlice";
const DetailTodos = () => {
  const listTodo = useSelector((state) => state.listTodo.data);
  const dispatch = useDispatch();
  const handleRevert = async (data) => {
    await dispatch(editTodo({ ...data, deleted: false }));
    dispatch(fetchDataTodo({ deleted: true }));
  };
  useEffect(() => {
    dispatch(fetchDataTodo({ deleted: true }));
  }, []);
  return (
    <>
      <h1 className="text-3xl text-center mt-5">List Status Todos</h1>
      <div className="container mx-auto mt-5   rounded-lg flex justify-center">
        <div className="w-10/12 backdrop-blur-md bg-seashell rounded-lg ">
          {listTodo?.map((item) => (
            <div key={item.id} className="flex justify-center   ">
              <div className="w-full  ">
                <div className=" flex justify-between items-center pl-11 pr-12 ">
                  <div className="flex items-center   w-full ">
                    <label
                      htmlFor={`isCheck${item.id}`}
                      className="w-5 h-5 border-2 border-darkbrown rounded-full peer  cursor-pointer relative flex items-center justify-center has-[input:checked]:border-lightorange">
                      <input
                        type="checkbox"
                        className="hidden peer"
                        id={`isCheck${item.id}`}
                      />
                      <span className="absolute w-5 h-5 flex items-center justify-center opacity-0 transition-opacity duration-200 peer-checked:opacity-100">
                        <i className="fa-solid fa-check text-lightorange text-xs"></i>
                      </span>
                    </label>
                    <p
                      className={`font-light border-b-[1px] w-full py-4 pl-5 border-skyblue `}>
                      {item.title}
                    </p>
                  </div>
                  <div className=" flex gap-3 my-6 ">
                    <div>
                      <button
                        onClick={() => handleRevert(item)}
                        className="hover:text-red-600 text-brown">
                        <i className="fa-solid fa-rotate-left"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {listTodo?.length === 0 && (
            <p className="text-2xl text-center pt-2">No Data</p>
          )}
          <div className="mt-[100px] pl-11 pb-8">
            <NavLink
              to={"/"}
              className=" text-lightorange p-3 rounded-lg hover:bg-lightorange hover:text-white transition-all ">
              List Todo
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTodos;
