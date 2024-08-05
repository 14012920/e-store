"use server";
import { dbConnect } from "./dbConnect";
import { Order, Product } from "./models";

export const fetchProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 6;

  try {
    await dbConnect();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .lean();
    const count = products?.length;
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/product/${id}`);
    const res = await response.json();
    return res?.data;
  } catch (err) {
    console.log("payment errror", err);
    throw err;
  }
};
export const fetchOrders = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 10;
  try {
    await dbConnect();
    const orders = await Order.find({
      order_id: { $regex: regex },
    })
      .lean()
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    const count = orders?.length;
    return { count, orders };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
