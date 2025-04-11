import axios from "axios";
const API_TODOS = import.meta.env.VITE_API_TODOS;
const ApiServiceTodos = {
  apiPostTodo: async (data) => {
    return axios.post(`${API_TODOS}`, data);
  },
  apiGetTodo: async (params) => {
    return axios.get(API_TODOS, { params });
  },
  apiDeleteTodo: async (id) => {
    return axios.delete(`${API_TODOS}/${id}`);
  },
  apiEditTodo: async (data) => {
    return axios.put(`${API_TODOS}/${data.id}`, data);
  },
};
export default ApiServiceTodos;
