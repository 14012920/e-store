import { dbConnect } from "@/lib/dbConnect";
import { Product } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const products = await Product.find();
    return NextResponse.json({ msg: "success", data: products });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
