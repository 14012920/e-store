import { Cat, Minus, Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const ComboCategory = ({ allProducts, title }: any) => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center text-center w-full py-4">
        <h1 className="font-semibold text-2xl lg:text-3xl">SHOP BY </h1>
        <span className="font-semibold text-2xl lg:text-3xl text-primary underline pl-1 underline-offset-2">
          {title}
        </span>
      </div>

      <div className="p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 gap-2">
        {allProducts.map((item: any, index: number) => (
          <Link
            href={`/view-all`}
            key={index}
            className="relative overflow-hidden"
          >
            <div className="p-0 m-0 h-80 lg:h-96 min-w-full overflow-hidden">
              <img
                src={item?.image}
                alt={`alt-p1`}
                className={`object-fill w-full lg:h-96 h-80 zoom-in-out-box`}
              />
              <div className="w-full lg:h-96 h-80 bg-[rgba(0,0,0,0.4)] absolute top-0 left-0" />
            </div>

            <div className="p-2 flex flex-col absolute bottom-2 left-2">
              {item?.subTitle && (
                <p className="text-sm pb-4 lg:text-lg uppercase text-white">
                  {item?.subTitle}
                </p>
              )}
              <div>
                <p className="text-md  pb-2 lg:text-lg uppercase text-white">
                  {item?.title}
                </p>
              </div>
              <div className="flex flex-row w-full">
                <Button className="bg-slate-50 text-primary rounded-none">
                  VIEW PRODUCTS
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ComboCategory;
