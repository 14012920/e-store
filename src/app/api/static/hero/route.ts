import { dbConnect } from "@/lib/dbConnect";
import { Hero } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const heros = await Hero.find();
    return NextResponse.json({ msg: "success", data: heros });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
