import { dbConnect } from "@/lib/dbConnect";
import { Product } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request: Request, context: { params: any }) => {
  try {
    await dbConnect();
    const productId = context.params.pid;
    const product = await Product.findById(productId);
    return NextResponse.json({ msg: "success", data: product });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
