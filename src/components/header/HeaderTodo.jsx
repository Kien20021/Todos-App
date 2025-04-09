import React from "react";
import logoTodo from "../../assets/image/todo-logo.png";
const HeaderTodo = () => {
  return (
    <div className="flex justify-center p-5 backdrop-blur-md bg-seashell mt-5 container mx-auto ">
      <img src={logoTodo} alt="Logo todos" />
    </div>
  );
};

export default HeaderTodo;
