import axios from "axios";
const API_TODOS = import.meta.env.VITE_API_TODOS;
const ApiServiceTodos = {
  apiPostTodo: async (data) => {
    return axios.post(`${API_TODOS}`, data);
  },
  apiGetTodo: async () => {
    return axios.get(API_TODOS);
  },
  apiDeleteTodo: async (id) => {
    return axios.delete(`${API_TODOS}/${id}`);
  },
};
export default ApiServiceTodos;
