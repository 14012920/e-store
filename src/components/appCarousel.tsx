/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export function AppCarousel() {
  const arr = ["/banner_2_new.png", "/banner1.webp"];
  return (
    <Carousel
      className="w-full"
      orientation="horizontal"
      opts={{
        align: "start",
        loop: true,
      }}
    >
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
