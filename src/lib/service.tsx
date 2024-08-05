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
