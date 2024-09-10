/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
export function AppCarousel() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({
      duration: 3000,
    }),
  ]);
  React.useEffect(() => {
    console.log("isInView", isInView);
  }, [isInView]);
  const arr = [
    {
      path: "/joystick1.webp",
      title: "Push Start Button-Joystick",
      subtitle: "On Sale",
      action: "/home",
    },
    {
      path: "/magical1.webp",
      title: "Magic Flying Spinner Toy",
      subtitle: "Best Seller",
      action: "/home",
    },
  ];
  function FadeInWhenVisible({ children }: any) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {arr.map((item, index) => (
            <div key={index} className="embla__slide">
              <div className="grid grid-rows-5 lg:grid-cols-5 h-[30rem]">
                <div className="bg-gray-900 h-[30rem] lg:col-span-3 row-span-3">
                  <Image
                    src={item.path}
                    alt={`alt-${item.path}`}
                    className="w-full h-[30rem] object-fill"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </div>

                <div className="pt-4 row-span-2 px-8 place-items-center text-center lg:place-content-center lg:col-span-2  h-[30rem] bg-[url('https://online-women-store.s3.amazonaws.com/1725850118386.webp')]">
                  <FadeInWhenVisible>
                    <h1 className="font-semibold text-2xl lg:text-5xl text-navbarTextColor">
                      {item?.title}
                    </h1>
                    <h3 className="font-medium  lg:text-2xl tracking-wider py-5 ">
                      {item?.subtitle}
                    </h3>
                    <Button className="border-none text-white bg-black">
                      Buy Now
                    </Button>
                  </FadeInWhenVisible>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
