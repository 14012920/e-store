import { dbConnect } from "@/lib/dbConnect";
import { Product } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request: Request, context: { params: any }) => {
  try {
    await dbConnect();
    const catid = context.params.catid;
    console.log(catid);
    const catData = await Product.find({ category: catid });
    return NextResponse.json({ msg: "success", data: catData });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
