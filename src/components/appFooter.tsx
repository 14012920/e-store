import { Facebook, Instagram, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AppFooter = () => {
  return (
    <footer className="text-slate  border-gray-200 bg-[#3c3c3c] text-white p-3">
      <div className="grid grid-cols-1 w-full lg:grid-cols-3 mb-2 py-2 lg:p-8">
        <div className="flex flex-col items-center col-span-3 lg:col-span-1 bg-[#3c3c3c] pb-3">
          <p className="text-normal font-medium">About DuoPrimp</p>
          {/* <Image src="/icon2.webp" alt={`brand-icon`} height={90} width={90} /> */}
          <p className="text-center text-xs lg:text-sm leading-5">
            DuoPrimp is the online store to buy best products at
            very reasonal rated with high quality.Buy variaty of trendy products
           and gadgets
          </p>

          <div className="item-baseline flex flex-row gap-3 pt-2">
            <div className="flex flex-row item-center">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <h2 className="font-sans text-xs pl-1">Instagram</h2>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Facebook className="h-4 w-4" aria-hidden="true" />
              <h2 className="font-sans text-xs">Facebook</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col lg:items-center mt-3">
          <p className="text-normal font-medium text-xs ">Terms & Policy</p>
          <div className="lg:flex flex-1 flex-col leading-5 text-gray-400">
            <Link href={"/policy/privacy-policy"}>
              <p className="text-[11px] lg:text-sm  underline underline-offset-2 cursor-pointer pb-1">
                Privacy Policy
              </p>
            </Link>
            <Link href={"/policy/return-policy"}>
              <p className="text-[11px] lg:text-sm  underline underline-offset-2 cursor-pointer pb-1">
                Return Policy
              </p>
            </Link>
            <Link href={"/policy/shipping-policy"}>
              <p className="text-[11px] lg:text-sm  underline underline-offset-2 cursor-pointer pb-1">
                Shipping Policy
              </p>
            </Link>
            <Link href={"/policy/terms-conditions"}>
              <p className="text-[11px] lg:text-sm  underline underline-offset-2 cursor-pointer pb-1">
                Terms of Service
              </p>
            </Link>
          </div>
        </div>

        <div className="flex w-full lg:justify-center mt-3 justify-end text-right leading-5">
          <div className="flex flex-col gap-[2px] trail">
            <p className="text-normal font-medium text-xs ">Contact Us</p>
           
            <p className="text-[11px] lg:text-sm text-gray-400">Soni Enterprise</p>
            <p className="text-[11px] lg:text-sm text-gray-400">Azad Nagar Hisar</p>
            <p className="text-normal font-medium text-xs pt-2 ">Query/Refund/Issues :</p>
            <p className="text-[11px] lg:text-sm text-gray-400"> email &copy;duoprimpstore.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-2 p-2">
          <Image
            alt="abc"
            src="/master.svg"
            height={30}
            width={30}
            // className="bg-white"
          />
          <Image
            alt="visa"
            src="/visa.svg"
            height={30}
            width={30}
            // className="bg-white"
          />
          <Image
            alt="upi"
            src="/upi.svg"
            height={30}
            width={30}
            // className="bg-white"
          />
        </div>

        <div className="flex items-center">
          <p className="text-[10px] font-medium text-white">
            &copy; 2024 Soni Enterprises. All rights reserved.
          </p>
        </div>
      </div>
      {/* Copyright Information */}
    </footer>
  );
};

export default AppFooter;
