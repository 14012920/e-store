import { dbConnect } from "@/lib/dbConnect";
import { Category } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const cats = await Category.find();
    return NextResponse.json({ msg: "success", data: cats });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
