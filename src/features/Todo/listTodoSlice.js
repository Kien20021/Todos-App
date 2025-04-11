import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiServiceTodos from "../../services/ApiTodos";

export const fetchDataTodo = createAsyncThunk(
  "listTodo/fetchDataTodo",
  async (params = { deleted: false }, thunkAPI) => {
    try {
      const res = await ApiServiceTodos.apiGetTodo(params);
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
      const res = await ApiServiceTodos.apiDeleteTodo(id);
      if (res.status === 200) {
        thunkAPI.dispatch(fetchDataTodo());
      } else {
        return thunkAPI.rejectWithValue("Không thể  xoa todo");
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
        // Hard code becasue api not support return empty array
        if ((action.error.message = "Rejected")) {
          state.data = [];
        } else {
          state.error = action.payload || "Đã xảy ra lỗi";
        }
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.payload || "Không thể thêm todo";
      });
  },
});

export const { setListTodo, setDeletedTodo } = listTodoSlice.actions;
export default listTodoSlice.reducer;
