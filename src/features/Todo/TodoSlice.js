import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiServiceTodos from "../../services/ApiTodos";

export const fetchDataTodo = createAsyncThunk(
  "Todo/fetchDataTodo",
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
  "Todo/addTodo",
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
  "Todo/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const res = await ApiServiceTodos.apiDeleteTodo(id);
      if (res.status === 200) {
        thunkAPI.dispatch(fetchDataTodo());
        return id;
      } else {
        return thunkAPI.rejectWithValue("Không thể  xoa todo");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editTodo = createAsyncThunk(
  "Todo,editTodo",
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
  "Todo/filterTodo",
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
const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    data: [],
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
      });
  },
});

export const { setListTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
