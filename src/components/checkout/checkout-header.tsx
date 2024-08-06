import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

const CheckoutHeader = ({
  stepCompleted,
  activeStep,
  isDesktop,
  onClickBack,
}: any) => {
  if (isDesktop) {
    return (
      <div className="flex bg-gray-100 px-2 flex-row  mb-2">
        <div className="flex flex-grow gap-1 items-center">
          <Button
            variant="ghost"
            size="sm"
            className="w-5 p-0"
            onClick={onClickBack}
          >
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
              stepCompleted >= 1
                ? "text-green-500"
                : activeStep == 1
                ? "text-slate-900"
                : "text-gray-500"
            }`}
          >
            <p>Mobile</p>
            <span className="pl-3">{">>"}</span>
          </div>
          <div
            className={`flex font-semibold ${
              stepCompleted >= 2
                ? "text-green-500"
                : activeStep == 2
                ? "text-slate-900"
                : "text-gray-500"
            }`}
          >
            <p>Address</p>
            <span className="pl-3">{">>"}</span>
          </div>
          <div
            className={`flex font-semibold ${
              stepCompleted >= 3
                ? "text-green-500"
                : activeStep == 3
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
        <Button
          variant="ghost"
          size="sm"
          className="w-5 p-0"
          onClick={onClickBack}
        >
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
            stepCompleted >= 1
              ? "text-green-500"
              : activeStep == 1
              ? "text-slate-900"
              : "text-gray-500"
          }`}
        >
          <p>Mobile</p>
          <span className="pl-3">{">>"}</span>
        </div>
        <div
          className={`flex font-semibold ${
            stepCompleted >= 2
              ? "text-green-500"
              : activeStep == 2
              ? "text-slate-900"
              : "text-gray-500"
          }`}
        >
          <p>Address</p>
          <span className="pl-3">{">>"}</span>
        </div>
        <div
          className={`flex font-semibold ${
            stepCompleted >= 3
              ? "text-green-500"
              : activeStep == 3
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
