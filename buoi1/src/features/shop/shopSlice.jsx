import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async () => {
    // Sử dụng FakeStoreAPI để lấy dữ liệu mẫu
    const response = await fetch("https://fakestoreapi.com/products?limit=4");
    return await response.json();
  },
);

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [], // Danh sách sản phẩm từ API
    cart: [], // Giỏ hàng của user
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  // REDUCERS ĐỒNG BỘ: Thêm/Xóa khỏi giỏ hàng
  reducers: {
    addToCart: (state, action) => {
      // payload là toàn bộ object sản phẩm
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // 💡 Nhờ có Immer, ta có thể viết code trực tiếp thay đổi state (mutate)
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // payload là ID của sản phẩm cần xóa
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // API đang gọi
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // API gọi thành công
        state.products = action.payload; // Lưu dữ liệu trả về
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; // API lỗi
        state.error = action.error.message;
      });
  },
});

// Tự động export các actions để dùng trong component
export const { addToCart, removeFromCart } = shopSlice.actions;

// Export reducer để gắn vào configureStore
export default shopSlice.reducer;
