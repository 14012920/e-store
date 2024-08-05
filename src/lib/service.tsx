export const fetchSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/product/${id}`);
    const res = await response.json();
    return res?.data;
  } catch (err) {
    console.log("payment errror", err);
    throw err;
  }
};
