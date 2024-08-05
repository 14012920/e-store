import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export function AppCarousel() {
  const arr = ["/banner_new_1.png", "/banner_2_new.png"];
  return (
    <Carousel className="w-full" orientation="horizontal">
      <CarouselContent>
        {arr.map((item, index) => (
          <CarouselItem key={index} className="h-[70vh]">
            <img
              src={item}
              alt={`alt-${item}`}
              style={{ objectFit: "cover", height: "70vh", width: "100%" }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
