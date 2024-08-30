const path = process.env.NEXT_PUBLIC_API_PATH;
export const fetchSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`${path}/api/product/${id}`);
    const res = await response.json();
    return res?.data;
  } catch (err) {
    console.log("payment errror", err);
    throw err;
  }
};

export const createCheckoutOrder = async (payload: any) => {
  try {
    const path = process.env.NEXT_PUBLIC_API_PATH;
    const data = await fetch(`${path}/api/payment/razorpay`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const response = await data.json();
    return response;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export const verifyPayment = async (payload: any) => {
  const path = process.env.NEXT_PUBLIC_API_PATH;
  const result = await fetch(`${path}/api/payment/verify`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(payload),
  });
  const response = await result.json();
  return response;
};
