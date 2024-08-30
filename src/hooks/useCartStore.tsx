import { create } from "zustand";

type CartState = {
  cartCount: number;
  cartProducts: [];
  total: number;
  //   getCart: () => void;
  addItem: (item: any, qty: number) => void;
  plusItem: (item: any, qty: number) => void;
  removeItem: (payload: any) => void;
  resetCart: () => void;
  deleteItem: (item: any, qty: number) => void;
};
const initialValue = {
  cartCount: 0,
  cartProducts: [],
  total: 0,
} as any;
export const useCartStore = create<CartState>((set, get) => ({
  ...initialValue,
  addItem: async (payload, qty) => {
    let temp = get().cartProducts;
    let total = get().total;
    let cartCount = get().cartCount;
    let index = temp.findIndex((item: any) => item._id == payload._id);
    if (index === -1) {
      let obj: any = { ...payload, qty: qty };
      temp.push(obj);
      total += parseInt(payload.discountedPrice) * qty;
      cartCount += 1;
      console.log("temp", temp, qty);
    } else {
      temp[index].qty += qty;
      total += parseInt(payload.discountedPrice) * qty;
    }
    localStorage.setItem(
      "cart",
      JSON.stringify({
        cartCount: cartCount,
        cartProducts: temp,
        total: total,
      })
    );
    set({
      cartProducts: temp,
      total: total,
      cartCount: cartCount,
    });
  },
  plusItem: async (payload: any, qty: any) => {
    let temp = get().cartProducts;
    let total = get().total;
    let cartCount = get().cartCount;
    let index = temp.findIndex((item: any) => item._id == payload._id);
    temp[index].qty += 1;
    total += parseInt(payload.discountedPrice);
    localStorage.setItem(
      "cart",
      JSON.stringify({
        cartCount: cartCount,
        cartProducts: temp,
        total: total,
      })
    );
    set({
      cartProducts: temp,
      total: total,
      cartCount: cartCount,
    });
  },
  removeItem: async (payload) => {
    let temp = get().cartProducts;
    let total = get().total;
    let cartCount = get().cartCount;
    let index = temp.findIndex((item: any) => item._id == payload._id);
    if (temp[index].qty == 1) {
      temp.splice(index, 1);
      total -= parseInt(payload.discountedPrice);
      cartCount -= 1;
    } else {
      temp[index].qty -= 1;
      total -= parseInt(payload.discountedPrice);
    }
    localStorage.setItem(
      "cart",
      JSON.stringify({
        cartCount: cartCount,
        cartProducts: temp,
        total: total,
      })
    );
    set({
      cartProducts: temp,
      total: total,
      cartCount: cartCount,
    });
  },
  deleteItem: async (payload: any, qty: any) => {
    let temp = get().cartProducts;
    let total = get().total;
    let cartCount = get().cartCount;
    let index = temp.findIndex((item: any) => item._id == payload._id);
    temp.splice(index, 1);
    total -= parseInt(payload.discountedPrice) * qty;
    cartCount -= 1;

    localStorage.setItem(
      "cart",
      JSON.stringify({
        cartCount: cartCount,
        cartProducts: temp,
        total: total,
      })
    );
    set({
      cartProducts: temp,
      total: total,
      cartCount: cartCount,
    });
  },
  resetCart: () => {
    set(initialValue);
  },
}));
