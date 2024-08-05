import {
  ArrowRight,
  BadgeCheck,
  Loader2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const CheckoutFooter = ({
  disabled,
  onClickButton,
  isLoading,
  isDesktop,
  type,
}: any) => {
  if (isDesktop) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-10 max-w-[50%] py-2 ml-7">
        <div className="flex  flex-col w-full">
          <div className="flex  flex-col">
            <Button
              className="border-primary p-7 mx-3 text-lg"
              disabled={disabled}
              onClick={onClickButton}
            >
              {type === "address" ? "Pay Now" : "Continue"}
              {isLoading ? (
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="flex w-full justify-center gap-3 pt-3">
            <div className="flex items-center justify-start  text-[9px]">
              <ShieldCheck className="mr-1 h-4 w-4" />
              <div className="flex flex-col font-medium">
                <p>PCI DSS</p>
                <p className="font-light">Certified</p>
              </div>
            </div>
            <div className="flex items-center justify-start  text-[9px]">
              <LockKeyhole className="mr-1 h-4 w-4" />
              <div className="flex flex-col font-medium">
                <p>Secured</p>
                <p className="font-light">Payments</p>
              </div>
            </div>
            <div className="flex items-center justify-start  text-[9px]">
              <BadgeCheck className="mr-1 h-4 w-4" />
              <div className="flex flex-col font-medium">
                <p>Verified</p>
                <p className="font-light">Merchants</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between font-normal text-xs mx-3 pt-2 text-gray-500">
            <div className="flex items-center font-medium text-[10px]">
              <p>T&C</p>
              <Separator
                orientation="vertical"
                className="mx-1 h-2 bg-gray-600"
              />
              <p>Policy</p>
            </div>
            <div className="flex items-center font-medium text-[10px]">
              <p>Powered by</p>
              <span className="font-semibold pl-1 text-slate-900">
                Expressy
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full bg-white py-2">
      <div className="flex flex-col w-full">
        <div className="flex  flex-col">
          <Button
            className="border-primary p-7 mx-3"
            disabled={disabled}
            onClick={onClickButton}
          >
            Continue
            {isLoading ? (
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex w-full justify-center gap-3 pt-3">
          <div className="flex items-center justify-start  text-[9px]">
            <ShieldCheck className="mr-1 h-4 w-4" />
            <div className="flex flex-col font-medium">
              <p>PCI DSS</p>
              <p className="font-light">Certified</p>
            </div>
          </div>
          <div className="flex items-center justify-start  text-[9px]">
            <LockKeyhole className="mr-1 h-4 w-4" />
            <div className="flex flex-col font-medium">
              <p>Secured</p>
              <p className="font-light">Payments</p>
            </div>
          </div>
          <div className="flex items-center justify-start  text-[9px]">
            <BadgeCheck className="mr-1 h-4 w-4" />
            <div className="flex flex-col font-medium">
              <p>Verified</p>
              <p className="font-light">Merchants</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between font-normal text-xs mx-3 pt-2 text-gray-500">
          <div className="flex items-center font-medium text-[10px]">
            <p>T&C</p>
            <Separator
              orientation="vertical"
              className="mx-1 h-2 bg-gray-600"
            />
            <p>Policy</p>
          </div>
          <div className="flex items-center font-medium text-[10px]">
            <p>Powered by</p>
            <span className="font-semibold pl-1 text-slate-900">Expressy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFooter;
