"use client";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import { useMediaQuery } from "./hooks/use-media-query";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import ItemCard from "./itemCard";
import { useState } from "react";
import { Separator } from "./ui/separator";
import CartSuggestions from "./cart-suggestion";
import Link from "next/link";
import CheckoutModal from "./checkout/checkout-modal";

const AppHeader = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loader, setIsLoader] = useState(false);
  if (isDesktop) {
    return (
      <div
        className="fixed
    top-0
    left-0  z-30 flex flex-1 min-w-full items-center px-16 h-16  bg-background  border border-b-[1px]  justify-between"
      >
        <div className="gap-10 flex items-center">
          <img
            src="/icon2.webp"
            alt={`brand-icon`}
            className="object-contain w-12 h-12"
          />
          <ul className="flex gap-3 font-medium h-16 items-center">
            <li className="flex cursor-pointer h-full items-center px-4 hover:border-b-2 hover:border-primary">
              Home
            </li>
            <li className="flex cursor-pointer h-full items-center px-4 hover:border-b-2 hover:border-primary">
              Top Wear
            </li>
            <li className="flex cursor-pointer h-full items-center px-4 hover:border-b-2 hover:border-primary">
              Bottom Wear
            </li>
            <li className="flex cursor-pointer h-full items-center px-4 hover:border-b-2 hover:border-primary">
              Clearance Sale
            </li>
          </ul>
        </div>
        <div>
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" color="#8e394c" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" color="#8e394c" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <ShoppingBag className="h-6 w-6" color="#8e394c" />
          </Button>
          <Sheet
            open={isOpen}
            onOpenChange={() => setIsOpen(!isOpen)}
            defaultOpen={false}
          >
            <SheetContent
              className="flex flex-1 w-[98%] p-2 flex-col"
              side={"right"}
            >
              <SheetHeader className="flex flex-row py-2">
                <p className="text-md font-semibold  mb-1">Your Cart</p>
              </SheetHeader>
              <div className="flex flex-row p-1 bg-slate-300 items-center justify-center">
                <p className="text-xs text-center line-clamp-1">
                  {"Free Shipping on all orders above 999"}
                </p>
              </div>
              <ItemCard
                item={{
                  title: "MENS TRACKSUIT FULL SLEEVE - BEIGE -BLACK",
                  price: "399.00",
                  mrp: "1999.00",
                }}
                onClickDelete={() => null}
                onClickMinus={() => null}
                onClickPlus={() => null}
              />
              <div>
                <p className="text-md font-semibold  mb">People Also Bought</p>
                <CartSuggestions
                  allProducts={[
                    {
                      title: "MENS TRACKSUIT FULL SLEEVE - BEIGE -BLACK",
                      price: "399.00",
                      mrp: "1999.00",
                      images: ["/p1.webp"],
                    },
                    {
                      title: "BLUE DENIM SHIRT",
                      price: "599.00",
                      mrp: "1499.00",
                      images: ["/p2.webp"],
                    },
                    {
                      title: "DARK BLUE DENIM SHIRT",
                      price: "299.00",
                      mrp: "1299.00",
                      images: ["/p1.webp"],
                    },
                  ]}
                />
              </div>

              <div>
                <Separator className="my-2" />
                <div className="flex flex-col p-2 w-full">
                  <div className="flex flex-row justify-between w-full pb-2 font-semibold text-base">
                    <p>SubTotal</p>
                    <p>₹1600</p>
                  </div>
                  <p className="text-[10px] pb-2">
                    Shipping, Taxes, And Discount Codes Calculated At Checkout.
                  </p>
                  {isDesktop ? (
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                        setIsLoader(true);
                        setTimeout(() => setOpenModal(true), 0);
                      }}
                    >
                      EXPRESS CHECKOUT
                    </Button>
                  ) : (
                    <Button asChild>
                      <Link href="/checkout">EXPRESS CHECKOUT</Link>
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <CheckoutModal
          openModal={openModal}
          onChangeModal={(e: any) => {
            setOpenModal(false);
            setTimeout(() => setIsOpen(true), 0);
          }}
          loader={loader}
          setIsLoader={setIsLoader}
        />
      </div>
    );
  }
  return (
    <div
      className="fixed
    top-0
    left-0 z-30 w-full flex items-center pl-4  h-16 bg-background  border-b-[1px] justify-between"
    >
      <div className="flex items-center flex-1 flex-grow">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6" color="#8e394c" />
          </SheetTrigger>
          <SheetContent className="w-[90%]" side={"left"}>
            <ul className="flex flex-col gap-1 font-medium items-baseline mt-6">
              <li className="flex cursor-pointer p-1 items-center px-4">
                Home
              </li>
              <li className="flex cursor-pointer p-1 items-center px-4">
                Top Wear
              </li>
              <li className="flex cursor-pointer p-1 items-center px-4">
                Bottom Wear
              </li>
              <li className="flex cursor-pointer p-1 items-center px-4">
                Clearance Sale
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <div className=" flex flex-1 flex-grow items-center justify-center">
        <img
          src="/icon2.webp"
          alt={`brand-icon`}
          className="object-contain w-16 h-16"
        />
      </div>

      <div className=" flex flex-1 flex-grow justify-end items-end">
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" color="#8e394c" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <ShoppingBag className="h-6 w-6" color="#8e394c" />
        </Button>
        <Sheet
          open={isOpen}
          onOpenChange={() => setIsOpen(!isOpen)}
          defaultOpen={false}
        >
          <SheetContent
            className="flex flex-1 w-[90%] pt p-2 flex-col overflow-y-auto no-scrollbar"
            side="right"
          >
            <SheetHeader className="flex flex-row py-2">
              <p className="text-md font-semibold  mb-1">Your Cart</p>
            </SheetHeader>
            <div className="flex flex-row p-1 bg-slate-300 items-center justify-center">
              <p className="text-xs text-center line-clamp-1">
                {"Free Shipping on all orders above 999"}
              </p>
            </div>
            <ItemCard
              item={{
                title: "MENS TRACKSUIT FULL SLEEVE - BEIGE -BLACK",
                price: "399.00",
                mrp: "1999.00",
              }}
              onClickDelete={() => null}
              onClickMinus={() => null}
              onClickPlus={() => null}
            />
            <div>
              <div>
                <p className="text-md font-semibold  mb">People Also Bought</p>
                <CartSuggestions
                  allProducts={[
                    {
                      title: "MENS TRACKSUIT FULL SLEEVE - BEIGE -BLACK",
                      price: "399.00",
                      mrp: "1999.00",
                      images: ["/p1.webp"],
                    },
                    {
                      title: "BLUE DENIM SHIRT",
                      price: "599.00",
                      mrp: "1499.00",
                      images: ["/p2.webp"],
                    },
                    {
                      title: "DARK BLUE DENIM SHIRT",
                      price: "299.00",
                      mrp: "1299.00",
                      images: ["/p1.webp"],
                    },
                  ]}
                />
              </div>
              <Separator className="my-2" />

              <div className="flex flex-col p-2">
                <div className="flex flex-row justify-between w-full pb-2 font-semibold">
                  <p>Total</p>
                  <p>₹1600</p>
                </div>
                <p className="text-[10px] pb-2">
                  Shipping, Taxes, And Discount Codes Calculated At Checkout.
                </p>
                <Button asChild>
                  <Link href="/checkout">EXPRESS CHECKOUT</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default AppHeader;
