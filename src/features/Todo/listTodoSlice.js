import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiServiceTodos from "../../services/ApiTodos";

export const fetchDataTodo = createAsyncThunk(
  "listTodo/fetchDataTodo",
  async (_, thunkAPI) => {
    try {
      const res = await ApiServiceTodos.apiGetTodo();
      if (res.status === 200) {
        return res.data;
      } else {
        return thunkAPI.rejectWithValue("Lỗi khi lấy danh sách todo");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addTodo = createAsyncThunk(
  "listTodo/addTodo",
  async (newTodo, thunkAPI) => {
    try {
      const res = await ApiServiceTodos.apiPostTodo(newTodo);
      if (res.status === 201) {
        thunkAPI.dispatch(fetchDataTodo());
        return res.data;
      } else {
        return thunkAPI.rejectWithValue("Không thể thêm todo");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTodo = createAsyncThunk(
  "listTodo/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const deletedTodo = state.listTodo.data.find((todo) => todo.id === id);
      const res = await ApiServiceTodos.apiDeleteTodo(id);
      if (res.status === 200) {
        if (deletedTodo) {
          thunkAPI.dispatch(setDeletedTodo(deletedTodo));
        }
        thunkAPI.dispatch(fetchDataTodo());
      } else {
        return thunkAPI.rejectWithValue("Không thể  xoa todo");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const revertTodo = createAsyncThunk(
  "listTodo/revertTodoApi",
  async (todo, thunkAPI) => {
    try {
      const res = await ApiServiceTodos.apiPostTodo(todo);
      if (res.status === 201) {
        thunkAPI.dispatch(fetchDataTodo());
        return todo;
      } else {
        return thunkAPI.rejectWithValue("Không thể hoàn tác trên server");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editTodo = createAsyncThunk(
  "listTodo,editTodo",
  async (data, thunkAPI) => {
    try {
      const res = await ApiServiceTodos.apiEditTodo(data);
      if (res.status === 200) {
        thunkAPI.dispatch(fetchDataTodo());
        return res.data;
      } else {
        return thunkAPI.rejectWithValue("Không thể  xoa todo");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterTodo = createAsyncThunk(
  "listTodo/filterTodo",
  async (valFilterTodo, thunkAPI) => {
    try {
      const title = valFilterTodo.title.trim();
      if (!title) {
        const res = await ApiServiceTodos.apiGetTodo();
        return res.data;
      } else {
        const res = await ApiServiceTodos.apiFilterTodo({ title });
        const filtered = res.data.filter((item) => item.title.trim() === title);
        return filtered;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("Không thể lọc todo");
    }
  }
);
const listTodoSlice = createSlice({
  name: "listTodo",
  initialState: {
    data: [],
    deletedTodos: [],
    error: null,
  },
  reducers: {
    setListTodo: (state, action) => {
      state.data = action.payload;
    },
    setDeletedTodo: (state, action) => {
      state.deletedTodos = [...state.deletedTodos, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchDataTodo.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchDataTodo.rejected, (state, action) => {
        state.error = action.payload || "Đã xảy ra lỗi";
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.payload || "Không thể thêm todo";
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload || "Không thể xoa todo";
      })
      .addCase(filterTodo.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(revertTodo.fulfilled, (state, action) => {
        const todo = action.payload;
        state.deletedTodos = state.deletedTodos.filter(
          (item) => item.id !== todo.id
        );
        state.data = [...state.data, todo];
      });
  },
});

export const { setListTodo, setDeletedTodo } = listTodoSlice.actions;
export default listTodoSlice.reducer;
