import { useState } from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CheckoutPayment = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex flex-1 py-2 flex-col  bg-white">
      <div className="flex flex-1 flex-col px-3 py-2">
        <div className="font-medium text-sm">
          <p>Payment</p>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          All transactions are secure and encrypted
        </div>
      </div>

      <div className="m-2">
        <RadioGroup defaultValue="option-one">
          <div className="flex flex-1 w-full px-2 py-3  flex-col border-primary border-[0.4px]">
            <div className="flex flex-row">
              <div className="flex flex-1 flex-row space-x-1 items-center">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="mt-2"
                />
                <div className="flex flex-col  pb-1">
                  <p className="text-sm font-medium">{"Razorpay Secure"}</p>
                  <p className="text-xs">{"(UPI,Cards,Wallets,Netbanking)"}</p>
                </div>
              </div>

              <div className="flex flex-1 justify-end items-center">
                <div className="flex flex-row space-x-[2px]">
                  <Image
                    alt="upi"
                    src="/upi.svg"
                    height={24}
                    width={24}
                    className="p-[1px] border"
                  />
                  <Image
                    alt="abc"
                    src="/master.svg"
                    height={24}
                    width={24}
                    className="p-[1px] border"
                  />
                  <Image
                    alt="visa"
                    src="/visa.svg"
                    height={24}
                    width={24}
                    className="p-[1px] border"
                  />
                </div>
                <div className="p-[1px] border h-[24px] w-[24px] flex items-center ml-[4px]">
                  <p className="text-xs font-medium text-blue-800">+16</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <Image
                alt="upi"
                src="/app-window.svg"
                height={70}
                width={100}
                className="text-gray-500 animate-pulse"
              />
              <p className="text-xs text-center">
                After clicking “Pay now”, you will redirected to Razorpay
                Secure(UPI,Wallets,Cards,NetBanking) to complete your purchase
                securely
              </p>
            </div>
          </div>
          <div className="flex flex-1 space-x-1 px-2 py-3 border-[0.4px] border-primary">
            <RadioGroupItem value="option-tow" id="option-one" />
            <p className="text-xs font-medium">{"Cash on Delivery (COD)"}</p>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default CheckoutPayment;
