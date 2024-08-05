import { dbConnect } from "@/lib/dbConnect";
import { Order } from "@/lib/models";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { userId, page } = await request.json();
  const limit = 4;
  try {
    await dbConnect();
    const orders = await Order.find({ user: userId })
      .limit(limit)
      .skip(page - 1);
    if (orders?.length) {
      return NextResponse.json({
        msg: "order fetched",
        data: orders,
        status: 200,
      });
    } else {
      return NextResponse.json({ data: orders, msg: "no orders", status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
