import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const item = {
  title: " MENS TRACKSUIT FULL SLEEVE - BEIGE -BLACK",
  price: "399.00",
  mrp: "1999.00",
};
const ItemCard = ({ item, onClickDelete, onClickMinus, onClickPlus }: any) => {
  return (
    <div className="flex flex-col  w-full flex-grow">
      <div className="flex h-24 w-full flex-row">
        <div>
          <img
            src={"/p1.webp"}
            alt={`alt-p1`}
            className="object-fill w-24 h-24"
          />
        </div>
        <div className="flex flex-col pl-2  gap-1  no-scrollbar w-full">
          <div className="flex w-full justify-normal">
            <p className="text-xs line-clamp-1 max-w-[90%]">{item?.title}</p>
            <Button variant="ghost" size="icon" onClick={onClickDelete}>
              <Trash className="h-5 w-5 text-gray-600" />
            </Button>
          </div>

          <div className="flex flex-row w-full gap-1 items-center">
            <p className="font-normal text-xs inline-block ">
              {`Rs. ${item?.price}`}
            </p>
            <p className="font-normal text-xs text-gray-500 line-through">
              {`Rs. ${item?.mrp}`}
            </p>
          </div>
          <div className="flex flex-row justify-between w-24 h-8 px-2 items-center border border-primary">
            <Button variant="ghost" size="icon" onClick={onClickMinus}>
              <Minus className="h-4 w-4 text-primary" />
            </Button>
            <p className="font-normal text-sm text-primary">1</p>
            <Button variant="ghost" size="icon" onClick={onClickPlus}>
              <Plus className="h-4 w-4 text-primary" />
            </Button>
          </div>
        </div>
      </div>
      <Separator className="my-2 mx-0" />
    </div>
  );
};
export default ItemCard;
