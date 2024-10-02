/* eslint-disable @next/next/no-img-element */
"use client";
import AppContainer from "@/components/appContainer";
import { FAQList } from "@/components/faq-list";
import ReviewList from "@/components/review-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useCartStore } from "@/hooks/useCartStore";
import { fetchProductById, getAllReview } from "@/lib/action";
import { ArrowRightLeft, Car, Loader, Minus, Plus, ShieldCheck, Slash } from "lucide-react";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { toast, ToastContainer } from "react-toastify";
export default function ProductDetail({ params }: { params: { id: string } }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState<any>({});
  const [allReview, setAllReview] = useState<any>([]);
  const { addItem } = useCartStore();

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const fetchProductData = async () => {
    try {
      const { productDetail } = await fetchProductById(params?.id);
      console.log("productDetail", productDetail);
      setProduct(productDetail);
    } catch (error) {
      console.log("detail page error", error);
    }
  };
  const fetchProductReview = async () => {
    try {
      const reviews = await getAllReview(params?.id);
      console.log("reviews", reviews);
      setAllReview(reviews);
    } catch (error) {
      console.log("detail page error", error);
    }
  };
  useEffect(() => {
    fetchProductData();
    fetchProductReview();
  }, []);

  const avargeRating = allReview?.reduce((acc: any, item: any) => {
    acc = acc + parseInt(item?.rating);
    return acc / allReview?.length || 1;
  }, 0);

  console.log("avargeRating", avargeRating);
  const onClickCart = (e: any, payload: any) => {
    e.preventDefault();
    addItem(payload, qty);
    toast.success("Item added to cart");
  };
  return (
    <AppContainer>
      <div className="flex flex-col px-4 pb-4 lg:px-24 pt-16 lg:pt-4 overflow-y-auto min-h-full">
        <div className="flex flex-row mt-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="p-0 m-0">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">{product?.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {Object.keys(product).length > 0 ? (
          <div className="flex flex-col  h-full overflow-y-auto">
            <div className="flex flex-col mb-10 mt-4 lg:flex-row">
              <div className="flex flex-1 flex-col">
                <Carousel
                  setApi={setApi}
                  className="w-full"
                  orientation="horizontal"
                  opts={{
                    skipSnaps: true,
                    dragThreshold: 20,
                  }}
                >
                  <CarouselContent>
                    {product?.images?.map((item: any, index: number) => (
                      <CarouselItem
                        key={index}
                        className="flex flex-col justify-center items-center"
                      >
                        <img
                          src={item}
                          alt={`alt-${item}`}
                          style={{
                            objectFit: "cover",
                            height: "50vh lg:70vh",
                            width: "98%",
                          }}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="py-2 flex flex-row justify-center">
                    {product?.images?.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="gap-2 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (api) {
                            console.log(
                              "api.selectedScrollSnap()",
                              api.selectedScrollSnap(),
                              index
                            );
                            setCurrent(index + 1);
                            if (current > 1) {
                              api?.scrollTo(api.selectedScrollSnap() - 1, true);
                            } else {
                              api?.scrollTo(api.selectedScrollSnap() + 1, true);
                            }
                          }
                        }}
                      >
                        <img
                          src={item}
                          alt={`alt-${item}`}
                          style={{
                            objectFit: "contain",
                            height: "12vh",
                            borderWidth: current === index + 1 ? 2 : 0,
                            borderColor: "var(--primary)",
                            marginRight: 5,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </Carousel>
              </div>
              <div className="flex flex-1 item-center w-full  flex-col lg:mx-8">
                <div className="p-2 flex flex-col">
                  <div>
                    <p className="text-md font-semibold  mb-2 lg:text-lg uppercase">
                      {product?.title}
                    </p>
                    <Rating initialValue={avargeRating < 3 ? 4 : avargeRating} readonly size={20} />
                  </div>
                  <div className="flex flex-row items-center py-2">
                    <div className="flex gap-2 lg:flex lg:flex-row lg:gap-2 items-center">
                      <p className="font-medium text-sm text-red-500 lg:text-lg">
                        Rs. {product?.discountedPrice}
                      </p>
                      <p className="font-medium text-sm text-gray-500 line-through lg:text-lg">
                        Rs. {Math.floor(product?.price)}
                      </p>
                      <div className="bg-red-500 p-1 text-sm lg:text-sm text-white:lg:text-lg">
                        <p className="text-white">
                          {Math.round((product?.discountedPrice / product?.price) * 100)}% OFF
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-24 h-9 px-2 items-center border border-gray-500">
                    <Button
                      variant="ghost"
                      size="icon"
                      disabled={qty <= 1}
                      onClick={() => setQty((prev) => prev - 1)}
                    >
                      <Minus className="h-4 w-4 text-slate-600" />
                    </Button>
                    <p className="font-normal text-sm">{qty}</p>
                    <Button variant="ghost" size="icon" onClick={() => setQty((prev) => prev + 1)}>
                      <Plus className="h-4 w-4 text-slate-600" />
                    </Button>
                  </div>
                  {product?.properties?.color && (
                    <div className="mt-3">
                      <p className="text-sm">SELECT A COLOR</p>
                      {product?.properties["color"]
                        ?.split(",")
                        .map((item: string, index: number) => (
                          <div
                            style={{ backgroundColor: item }}
                            key={index}
                            className={`border-black border-2 flex items-center text-center justify-center rounded-full  w-9 h-9 mt-1`}
                          ></div>
                        ))}
                    </div>
                  )}
                  {product?.properties?.size && (
                    <div className="mt-3">
                      <p className="text-sm"> SELECT A SIZE</p>
                      {product?.properties["size"]
                        ?.split(",")
                        .map((item: string, index: number) => (
                          <div
                            key={index}
                            className=" flex items-center text-center justify-center p-1 rounded-sm border w-9 h-9 mt-1"
                          >
                            {item.substring(0, 1)?.toUpperCase()}
                          </div>
                        ))}
                    </div>
                  )}
                  <div className="flex flex-1 flex-row w-full my-4">
                    <Button
                      variant="outline"
                      className="w-full text-primary bg-primary text-white h-14"
                      onClick={(e) => onClickCart(e, product)}
                    >
                      <p className="py-4">ADD TO CART</p>
                    </Button>
                  </div>
                  <div className="flex flex-col w-full justify-center items-center">
                    <p className="text-sm font-medium  my-4">Reasons to Choose Us</p>
                    <div className="flex flex-row gap-4">
                      <div className="max-w-20 bg-black text-white p-2 border text-center rounded-md flex flex-col items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-white" />
                        <p className="font-medium text-[12px] mt-1">SECURE CHECKOUT</p>
                      </div>
                      <div className="max-w-20 bg-black text-white p-2 border text-center rounded-md flex flex-col items-center justify-center">
                        <ArrowRightLeft className="h-6 w-6 text-white" />
                        <p className="font-medium text-[12px] mt-1">EASY RETURN</p>
                      </div>
                      <div className="max-w-20 bg-black text-white p-2 border text-center rounded-md flex flex-col items-center justify-center">
                        <Car className="h-6 w-6 text-white" />
                        <p className="font-medium text-[12px] mt-1">Fast Shipping</p>
                      </div>
                      {/* <div className="max-w-20 bg-slate-600 text-white p-2 border text-center rounded-md flex flex-col items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-white" />
                        <p className="font-medium text-[10px] mt-1">
                          SECURE CHECKOUT
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="text-base font-medium  mb-2">Product Description</p>
                  <p className="text-sm font-light from-neutral-300 pb-1">{product?.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <h3 className="text-md font-medium">{"Customer's FAQ's"}</h3>
              <FAQList />
            </div>
            <ReviewList />
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center">
            <Loader className="h-12 w-12 my-2 animate-spin" color="#0c1424" />
          </div>
        )}
      </div>
    </AppContainer>
  );
}
