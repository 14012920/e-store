"use server";
import { revalidatePath } from "next/cache";
import { Category, Hero, Product, Review } from "./models";
import { connectToDB } from "./dbConnect";
import { redirect } from "next/navigation";

//PRODUCT ***************************
export const fetchProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 10;
  try {
    connectToDB();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .lean();
    const count = products?.length;
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProductById = async (id: string) => {
  try {
    await connectToDB();
    const productDetail = await Product.findOne({ _id: id });
    return { productDetail: productDetail };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProductByCatId = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 10;
  try {
    await connectToDB();
    const productByCatId = await Product.find({ collection: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .lean();
    return { productByCatId: productByCatId };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

//CATEGORY ACTIONS*************
export const fetchCats = async () => {
  try {
    await connectToDB();
    const cats = await Category.find().lean();
    return { cats };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchCatById = async (id: string) => {
  try {
    await connectToDB();
    const catDetails = await Category.findOne({ _id: id });
    return { category: catDetails };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

//BANNERS ACTIONS*************
export const fetchBanners = async () => {
  try {
    await connectToDB();
    const banners = await Hero.find().lean();
    return { banners };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch BANNERS!");
  }
};

export const fetchBannerById = async (id: string) => {
  try {
    await connectToDB();
    const bannersDetails = await Hero.findOne({ _id: id });
    return { banners: bannersDetails };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch bannersDetails!");
  }
};

export const addReview = async (formData: any) => {
  const { name, rating, review, productId } = Object.fromEntries(formData);
  console.log("fordataaaaaa", formData);
  try {
    connectToDB();
    const newReview = new Review({
      name,
      productId,
      rating,
      review,
    });

    await newReview.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Review!");
  }

  //   revalidatePath("/dashboard/users");
  //   redirect("/dashboard/users");
};

export const getAllReview = async (productId: string) => {
  try {
    await connectToDB();
    const reviews = await Review.find({ productId }).lean();
    if (reviews) {
      return reviews;
    }
    console.log("reviews", reviews);
    return [];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch reviews!");
  }
};
