
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// TODO 3: Tạo async thunk tên fetchProducts
// Gợi ý:
// - action type: "shop/fetchProducts"
// - fetch API: https://fakestoreapi.com/products?limit=8
// - return data sau khi response.json()

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=8")
    return await response.json();
  },
);

const initialState = {
  products: [],
  cart: [], // Mỗi item: { id, title, price, image, quantity }
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      // TODO 4: Kiểm tra sản phẩm đã tồn tại trong cart chưa bằng id
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // TODO 5: Nếu đã có, tăng quantity thêm 1
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
        // TODO 6: Nếu chưa có, thêm sản phẩm vào cart với quantity: 1
      }
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity += 1;
      }
      // TODO 7: Tìm sản phẩm theo productId và tăng quantity thêm 1
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.cart.find((item) => item.id === productId);
      if (!item) {
        return;
      }

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== productId);
      }
      // TODO 8: Tìm sản phẩm theo productId
      // Nếu quantity > 1 thì giảm đi 1
      // Nếu quantity === 1 thì xóa sản phẩm khỏi cart
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
      // TODO 9: Xóa sản phẩm khỏi cart theo id nhận từ action.payload
    },

    clearCart: (state) => {
      state.cart = [];
      // TODO 10: Xóa toàn bộ giỏ hàng
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // TODO 11: Cập nhật status thành "loading" và reset error
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // TODO 12: Cập nhật status thành "succeeded" và lưu products từ payload
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // TODO 13: Cập nhật status thành "failed" và lưu message lỗi
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = shopSlice.actions;

export default shopSlice.reducer;
