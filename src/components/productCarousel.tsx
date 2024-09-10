import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export function ProductCarousel({
  data,
  isShowTitle,
  title,
  hightLighted,
}: any) {
  const id = "1234";
  return (
    <div>
      {isShowTitle && (
        <div className="flex flex-col justify-center  w-full py-4 my-8">
          <h3 className="font-medium text-brandText lg:text-xl tracking-wider">
            {"Shop By"}
          </h3>
          <h1 className="font-semibold text-2xl lg:text-3xl text-navbarTextColor">
            {"BEST SELLER"}
          </h1>
          <div className="w-32 h-1 bg-brandSecondary mt-3" />
        </div>
      )}
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {data?.map((item: any, index: number) => (
            <CarouselItem
              key={index}
              className="basis-[45%] md:basis-1/2 lg:basis-1/4 "
            >
              <Link
                href={`/product-detail/${item?._id}`}
                className="cursor-pointer"
              >
                <div>
                  <Card className="border-none relative">
                    <div className="bg-slate-50 p-1 text-[10px] lg:text-sm text-primary absolute top-2 left-2">
                      <p>{item?.ribbon}</p>
                    </div>
                    <CardContent className="p-0 m-0 flex items-center justify-center bg-slate-300 h-48 lg:h-80">
                      <Image
                        src={item?.images[0]}
                        alt={`alt-p1`}
                        className="w-full h-full"
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </CardContent>
                    <CardFooter className="p-2 flex flex-col">
                      <div>
                        <p className="text-xs text-center mb-2 lg:text-sm">
                          {item?.title}
                        </p>
                      </div>
                      <div className="flex flex-row w-full justify-between items-center">
                        <div className="lg:flex lg:flex-row lg:gap-2">
                          <p className="font-normal text-xs text-red-500 lg:text-sm">
                            Rs.{item?.discountedPrice}
                          </p>
                          <p className="font-normal text-xs text-gray-500 line-through lg:text-sm">
                            Rs. {item.price}
                          </p>
                        </div>

                        <div className="bg-red-500 p-1 text-xs lg:text-sm text-white">
                          <p>
                            {Math.round(
                              (item?.discountedPrice / item?.price) * 100
                            )}
                            % OFF
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
