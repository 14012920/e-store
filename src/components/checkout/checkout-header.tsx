import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

const CheckoutHeader = ({ stepCompleted, activeStep, isDesktop }: any) => {
  if (isDesktop) {
    return (
      <div className="flex bg-gray-100 px-2 flex-row  mb-2">
        <div className="flex flex-grow gap-1 items-center">
          <Button variant="ghost" size="sm" className="w-5 p-0">
            <ArrowLeft className="h-8 w-8" />
          </Button>
          <img
            src="/icon2.webp"
            alt={`brand-icon`}
            className="object-contain w-10 h-10"
          />
        </div>
        <div className="flex flex-grow justify-evenly text-xs  items-center">
          <div
            className={`flex font-semibold ${
              stepCompleted === "mobile"
                ? "text-green-500"
                : activeStep == "mobile"
                ? "text-slate-900"
                : "text-gray-500"
            }`}
          >
            <p>Mobile</p>
            <span className="pl-3">{">>"}</span>
          </div>
          <div
            className={`flex font-semibold ${
              stepCompleted === "address"
                ? "text-green-500"
                : activeStep == "address"
                ? "text-slate-900"
                : "text-gray-500"
            }`}
          >
            <p>Address</p>
            <span className="pl-3">{">>"}</span>
          </div>
          <div
            className={`flex font-semibold ${
              stepCompleted === "pay"
                ? "text-green-500"
                : activeStep == "pay"
                ? "text-slate-900"
                : "text-gray-500"
            }`}
          >
            <p>Pay</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" fixed top-0 left-0 z-30 w-full flex bg-white px-4 flex-row mr-2">
      <div className="flex flex-grow gap-1 items-center">
        <Button variant="ghost" size="sm" className="w-5 p-0">
          <ArrowLeft className="h-8 w-8" />
        </Button>
        <img
          src="/icon2.webp"
          alt={`brand-icon`}
          className="object-contain w-10 h-10"
        />
      </div>
      <div className="flex flex-grow justify-evenly text-xs  items-center">
        <div
          className={`flex font-semibold ${
            stepCompleted === "mobile"
              ? "text-green-500"
              : activeStep == "mobile"
              ? "text-slate-900"
              : "text-gray-500"
          }`}
        >
          <p>Mobile</p>
          <span className="pl-3">{">>"}</span>
        </div>
        <div
          className={`flex font-semibold ${
            stepCompleted === "address"
              ? "text-green-500"
              : activeStep == "address"
              ? "text-slate-900"
              : "text-gray-500"
          }`}
        >
          <p>Address</p>
          <span className="pl-3">{">>"}</span>
        </div>
        <div
          className={`flex font-semibold ${
            stepCompleted === "pay"
              ? "text-green-500"
              : activeStep == "pay"
              ? "text-slate-900"
              : "text-gray-500"
          }`}
        >
          <p>Pay</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
