import { useState } from "react";
import { Check, CircleCheck, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CheckoutAddress = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex flex-1 py-2 flex-col  bg-white">
      <div className="flex flex-1 items-center justify-between px-2">
        <div className="font-medium text-sm">
          <p>Shipping Address</p>
        </div>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary font-semibold text-xs"
          >
            <PlusIcon className="h-4 w-4" />
            Add Address
          </Button>
        </div>
      </div>

      <div className="m-2">
        <Card
          className="border cursor-pointer flex flex-col  shadow-none rounded-lg border-primary overflow-hidden"
          key={"1"}
        >
          <CardContent className="flex flex-col align-baseline justify-start px-4 pt-2 m-0 relative overflow-hidden">
            <div className="bg-primary text-white absolute p-[1px] left-0 top-0 rounded-r-sm rounded-t-none overflow-hidden">
              <Check className="h-4 w-4" />
            </div>
            <div className="flex flex-1 w-full justify-between items-center">
              <p className="font-medium">{"Manoj Kumar"}</p>
              <div>
                <Button
                  variant="ghost"
                  size={"sm"}
                  className="pr-2 font-medium text-primary underline underline-offset-2 text-xs"
                >
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size={"sm"}
                  className="p-0 font-medium text-primary underline underline-offset-2 text-xs"
                >
                  Delete
                </Button>
              </div>
            </div>
            <p className="text-xs line-clamp-1">
              {"1610 dev Nagar azad nagar ,hisar haryana"}
            </p>
            <div className="pt-2">
              <p className="font-normal text-xs">bc@gmail.com</p>
            </div>
          </CardContent>
        </Card>
        <div className="py-4">
          <div className="flex flex-row items-center font-medium text-sm mb-2">
            <p>Shipping method</p>
          </div>
          <div className="flex gap-1">
            <CircleCheck className="h-4 w-4  text-primary" />
            <p className="text-xs ">Shipping charge @ Rs 69</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAddress;
