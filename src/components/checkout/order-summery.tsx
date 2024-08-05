import { useState } from "react";
import {
  BadgePercent,
  ChevronDown,
  ChevronsUpDown,
  Plus,
  ShoppingCart,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "../ui/separator";

const OrderSummery = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex py-2 flex-col mt-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full ">
        <div className="flex justify-between flex-1 mx-2">
          <CollapsibleTrigger asChild>
            <div className="flex flex-1 items-center justify-between  p-3 bg-white rounded-t-md">
              <div className="flex gap-2 items-center">
                <Button variant="ghost" size="sm" className="w-5 p-0">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <div className="flex items-center text-sm">
                  <p>Order Summery</p>
                  <span className="pl-1">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center font-medium text-sm">
                <p>Rs 233.00</p>
              </div>
            </div>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="flex px-3 mt-0 bg-white rounded-b-md mx-2 rounded-s-none">
          <div className="py-2">
            <Card
              className="border-none cursor-pointer flex flex-row min-20 shadow-none"
              key={"1"}
            >
              <CardContent className="p-0 m-0 h-20 w-20">
                <img
                  src={"/p1.webp"}
                  alt={`alt-p1`}
                  className="object-fill w-20 h-20"
                />
              </CardContent>
              <CardFooter className="p-2 flex flex-col">
                <div>
                  <p className="text-xs text-center  uppercase line-clamp-1">
                    {"Black Printed Round Neck T-Shirt"}
                  </p>
                </div>
                <div className="flex flex-row w-full justify-between items-center">
                  <div className="lg:flex lg:flex-row lg:gap-2">
                    <p className="font-normal text-xs text-red-500">
                      Rs. {"299.00"}
                    </p>
                    <p className="font-normal text-xs text-gray-500">
                      Qty. {"1"}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <div className="py-2">
              <div>
                <div className="flex w-full justify-between">
                  <p className="font-medium text-xs">Subtotal</p>
                  <p className="font-medium text-xs text-left">99.00 Rs</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="font-medium text-xs ">Shipping</p>

                  <p className="font-medium text-xs text-left">69.00 Rs</p>
                </div>
              </div>
              <Separator className="my-2" />
              <div className="flex w-full justify-between">
                <p className="font-semibold text-xs">To Pay</p>
                <p className="font-semibold text-xs">369.00 Rs</p>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <div className="flex gap-1 bg-white p-3 rounded-md border mt-1 mx-2 item-center">
        <div className="flex items-center">
          <BadgePercent className="h-6 w-6 text-green-600" />
        </div>
        <Input
          type="text"
          placeholder="Enter coupon code"
          className="max-w-[75%] focus-visible:ring-0 ring-offset-0 focus:border-primary"
        />
        <Button
          variant="ghost"
          size="sm"
          className="w-5 pl-8 text-primary font-bold"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default OrderSummery;
