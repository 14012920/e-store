import { dbConnect } from "@/lib/dbConnect";
import { Address } from "@/lib/models";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { userId } = await request.json();
  try {
    await dbConnect();
    const address = await Address.find({ user: userId });
    if (address?.length) {
      return NextResponse.json({
        msg: "address fetched",
        data: address,
        status: 200,
      });
    } else {
      return NextResponse.json({
        data: address,
        msg: "no address",
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
