import axios from "axios";

const API_TODOS = import.meta.env.VITE_API_TODOS;

const ApiServiceTodos = {
  apiPostTodo: async (data) => {
    return axios.post(`${API_TODOS}`, data);
  },
  apiGetTodo: async () => {
    return axios.get(API_TODOS);
  },
};

export default ApiServiceTodos;
