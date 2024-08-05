import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
const item = {
  title: " MENS TRACKSUIT FULL SLEEVE - BEIGE -BLACK",
  price: "399.00",
  mrp: "1999.00",
};
const CartSuggestions = ({ allProducts, onClickCart }: any) => {
  return (
    <div className="py-4 m-0 flex overflow-x-auto gap-2 no-scrollbar">
      {allProducts?.map((item: any, index: number) => (
        <Card
          className="border-none cursor-pointer flex flex-col min-w-36 "
          key={index}
        >
          <CardContent className="p-0 m-0 h-44 min-w-full">
            <img
              src={item?.images[0]}
              alt={`alt-p1`}
              className="object-fill w-full  h-44"
            />
          </CardContent>
          <CardFooter className="p-2 flex flex-col">
            <div>
              <p className="text-xs text-center mb-2 uppercase line-clamp-1">
                {item?.title}
              </p>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="lg:flex lg:flex-row lg:gap-2">
                <p className="font-normal text-xs text-red-500">
                  Rs. {item?.price}
                </p>
                <p className="font-normal text-xs text-gray-500 line-through ">
                  Rs. {Math.floor(item?.mrp * 3)}
                </p>
              </div>
            </div>
            <Button
              onClick={() => null}
              className="p-3 h-6 border-none rounded-none hover:bg-primary mt-2 font-light text-xs"
            >
              Add To Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default CartSuggestions;
