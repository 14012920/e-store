import { dbConnect } from "@/lib/dbConnect";
import { Order } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request: Request, context: { params: any }) => {
  try {
    await dbConnect();
    const userId = context.params.id;
    const orders = await Order.find({ user: userId });
    return NextResponse.json({ msg: "success", data: orders });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
