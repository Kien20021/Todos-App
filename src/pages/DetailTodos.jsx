import React from "react";

const DetailTodos = () => {
  return (
    <div className="container mx-auto mt-20   rounded-lg">
      <h1 className="text-3xl text-center mb-5">List Status Todos</h1>
      <div className="backdrop-blur-md bg-seashell rounded-lg w-full pb-[200px]">
        <div className="flex justify-center   ">
          <div className="w-full  ">
            <div className=" flex justify-between items-center pl-11 pr-12 ">
              <div className="flex items-center   w-full ">
                <label
                  htmlFor={`isCheck`}
                  className="w-5 h-5 border-2 border-darkbrown rounded-full peer  cursor-pointer relative flex items-center justify-center has-[input:checked]:border-lightorange">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    id={`isCheck`}
                  />
                  <span className="absolute w-5 h-5 flex items-center justify-center opacity-0 transition-opacity duration-200 peer-checked:opacity-100">
                    <i className="fa-solid fa-check text-lightorange text-xs"></i>
                  </span>
                </label>
                <p
                  className={`font-light border-b-[1px] w-full py-4 pl-5 border-skyblue `}>
                  Coong vieecj 1
                </p>
              </div>
              <div className=" flex gap-3 my-6 ">
                <div>
                  <button className="hover:text-red-600 text-brown">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
                <div>
                  <button className="hover:text-red-600 text-reddele">
                    <i className="fa-solid fa-trash"></i>
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

export default DetailTodos;
