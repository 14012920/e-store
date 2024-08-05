"use client";
import AppContainer from "@/components/appContainer";
import AppRating from "@/components/appRating";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { fetchSingleProduct } from "@/lib/service";
import { Loader, Slash } from "lucide-react";
import { useEffect, useState } from "react";
export default function ProductDetail({ params }: { params: { id: string } }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [product, setProduct] = useState<any>({});
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
      const product = await fetchSingleProduct(params?.id);
      setProduct(product);
    } catch (error) {
      console.log("detail page error", error);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <AppContainer>
      <div className="flex flex-col px-4 pb-4 lg:px-24 pt-20 lg:pt-4">
        <div className="flex flex-row justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
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
          <div className="flex flex-col my-10 lg:flex-row">
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
                          height: "70vh",
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
            <div className="flex flex-1 item-center w-full h-screen flex-col lg:mx-8">
              <div className="p-2 flex flex-col">
                <div>
                  <p className="text-md font-semibold  mb-2 lg:text-lg uppercase">
                    {product?.title}
                  </p>
                  <AppRating />
                </div>
                <div className="flex flex-row items-center py-2">
                  <div className="flex gap-2 lg:flex lg:flex-row lg:gap-2 items-center">
                    <p className="font-medium text-sm text-red-500 lg:text-lg">
                      Rs. {product?.price}
                    </p>
                    <p className="font-medium text-sm text-gray-500 line-through lg:text-lg">
                      Rs. {Math.floor(product?.price * 3)}
                    </p>
                    <div className="bg-red-500 p-1 text-sm lg:text-sm text-white:lg:text-lg">
                      <p className="text-white">80% OFF</p>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-row justify-between w-24 h-9 px-2 items-center border">
                <Button variant="ghost" size="icon">
                  <Minus className="h-4 w-4 text-slate-600" />
                </Button>
                <p className="font-normal text-sm">1</p>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4 text-slate-600" />
                </Button>
              </div> */}
                <div className="flex flex-1 flex-row w-full my-4">
                  <Button
                    variant="outline"
                    className="w-full text-primary border-primary"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium ml-[-10px] mb-4">
                  Product Description
                </p>
                <p className="text-sm font-light pb-1">
                  {product?.description}
                </p>

                {/* <ul className="flex flex-col list-disc pl-2">
                <li className="text-sm font-light pb-1">
                  Pack of 2 Men Printed Round Neck Cotton Blend Multicolor
                  T-Shirt
                </li>
                <li className="text-sm font-light pb-1">
                  Crafted from a comfortable fabric blend
                </li>
                <li className="text-sm font-light pb-1">
                  Pack of 2 Men Printed Round Neck Cotton Blend Multicolor
                  T-Shirt
                </li>
                <li className="text-sm font-light pb-1">
                  Pack of 2 Men Printed Round Neck Cotton Blend Multicolor
                  T-Shirt
                </li>
              </ul> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center">
            <Loader className="h-12 w-12 my-2 animate-spin" color="#8e394c" />
          </div>
        )}
      </div>
    </AppContainer>
  );
}
