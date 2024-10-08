/* eslint-disable @next/next/no-img-element */
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import ItemCard from "./itemCard";
import { Separator } from "./ui/separator";
import { Link, Menu, Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import CartSuggestions from "./cart-suggestion";
import Image from "next/image";

const MobileCart = ({
  cartProducts,
  setIsOpen,
  isOpen,
  total,
  handlePayment,
  cartCount,
  onClickMinus,
  onClickPlus,
  onClickDelete,
}: any) => {
  return (
    <div
      className="fixed
      top-0
      left-0 z-30 w-full flex items-center pl-4  min-h-16 bg-appBgColor  border-b-[1px] justify-between"
    >
      <div className="flex items-center flex-1 flex-grow">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6" color="#0c1424" />
          </SheetTrigger>
          <SheetContent className="w-[90%] bg-appBgColor" side={"left"}>
            <ul className="flex flex-col gap-1 font-semibold items-baseline mt-6">
              <li className="flex cursor-pointer p-1 items-center px-4">
                Home
              </li>
              <li className="flex cursor-pointer p-1 items-center px-4">
                Best Seller
              </li>
              <li className="flex cursor-pointer p-1 items-center px-4">
                New Arrival
              </li>
              <li className="flex cursor-pointer p-1 items-center px-4">
                Track Order
              </li>
              <li className="flex cursor-pointer p-1 items-center px-4">
                Contact
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <div className=" flex flex-1 flex-grow items-center justify-center">
      <Image src="/Duo2.webp" alt={`brand-icon`} width={180} height={40} />
      </div>

      <div className=" flex flex-1 flex-grow justify-end items-end">
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" color="#0c1424" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="relative mr-2"
        >
          <Image src="/cart.svg" alt={`brand-icon`} width={26} height={26} />
          {cartCount > 0 && (
            <div className="absolute flex items-center justify-center  bottom-[1px] bg-black right-[-2px]  w-[20px] h-[20px] rounded-full">
              <p className="text-white text-xs text-center">{cartCount}</p>
            </div>
          )}
        </Button>
        <Sheet
          open={isOpen}
          onOpenChange={() => setIsOpen(!isOpen)}
          defaultOpen={false}
        >
          {cartCount < 1 ? (
            <SheetContent
              className="flex flex-1 w-[90%] pt p-2 bg-appBgColor flex-col overflow-y-auto no-scrollbar"
              side="right"
            >
              <SheetHeader className="flex flex-row pt-2">
                <p className="text-md font-semibold">Your Cart</p>
              </SheetHeader>

              <div className="flex flex-col items-center justify-center w-full gap-3">
                <p className="text-md font-semibold  mb">Your Cart is empty</p>
                <Button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <p>Continue Shopping</p>
                </Button>
              </div>
            </SheetContent>
          ) : (
            <SheetContent
              className="flex flex-1 w-[90%] pt p-2 flex-col bg-appBgColor"
              side="right"
            >
              <SheetHeader className="flex flex-row pt-2">
                <p className="text-md font-semibold">Your Cart</p>
              </SheetHeader>
              <div className="overflow-y-auto no-scrollbar flex flex-col flex-grow overflow-scroll pb-20">
                <div className="flex flex-row p-1 bg-slate-300 items-center justify-center mb-2">
                  <p className="text-xs text-center line-clamp-1">
                    {"Free Shipping on all orders above 999"}
                  </p>
                </div>
                {cartProducts?.map((item: any, index: number) => (
                  <ItemCard
                    key={index}
                    item={item}
                    onClickDelete={() => onClickDelete(item, item?.qty)}
                    onClickMinus={() => onClickMinus(item, item?.qty)}
                    onClickPlus={() => onClickPlus(item, item?.qty)}
                  />
                ))}
                <div>
                  {/* <p className="text-md font-semibold ">People Also Bought</p>
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
                  /> */}
                </div>
              </div>

              <div>
                <div className="flex flex-col p-2 absolute left-0 bottom-1 z-10 bg-appBgColor w-full">
                  <Separator className="bg-brand2" />
                  <div className="flex flex-row justify-between w-full font-semibold mt-2">
                    <p>Total</p>
                    <p>₹{total}</p>
                  </div>
                  <p className="text-[10px] pb-2">
                    Shipping, Taxes, And Discount Codes Calculated At Checkout.
                  </p>
                  {/* <Button asChild>
                    <Link href="/checkout">EXPRESS CHECKOUT</Link>
                  </Button> */}
                  <Button
                    onClick={() => {
                      handlePayment();
                    }}
                  >
                    <p>EXPRESS CHECKOUT</p>
                  </Button>
                </div>
              </div>
            </SheetContent>
          )}
        </Sheet>
      </div>
    </div>
  );
};
export default MobileCart;
