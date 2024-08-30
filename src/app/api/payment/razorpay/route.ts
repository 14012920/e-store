import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
const getRandomId = (min = 0, max = 500000) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return `rcp${num.toString().padStart(6, "0")}`;
};
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_APP_ID!,
  key_secret: process.env.RAZORPAY_APP_SECRET,
});
export async function POST(request: NextRequest) {
  const { amount, currency, line_items } = (await request.json()) as any;
  var option = {
    amount: amount,
    currency: currency,
    receipt: getRandomId(1000, 99000),
    line_items_total: amount,
    line_items: line_items,
  };
  console.log(option);
  const order = await razorpay.orders.create(option);

  return NextResponse.json(
    {
      id: order.id,
      currency: order.currency,
      amount: order.amount,
      line_items,
    },
    { status: 200 }
  );
}
