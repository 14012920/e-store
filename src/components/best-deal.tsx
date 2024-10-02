"use client";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
const BestDeal = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 bg-[#f6f7f9] lg:place-items-center">
      <div className="flex flex-col item-center justify-center h-full text-center  w-full py-4 px-8 col-span-3 lg:pl-40">
        <h1 className="font-semibold text-2xl lg:text-3xl text-navbarTextColor">
          {"Best Deal of the Day"}
        </h1>

        <div className="py-4 text-[#888] font-light">
          <p>
          Mini Bluetooth Thermal Printer, Portable Label Printer Inkfree Printer for Android & iOS System, Thermal Printer with 5 White & 3 Colour Print
          </p>
        </div>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      <div className="h-96  col-span-2">
        <Image
          src={"/printer.png"}
          alt={`printer-use`}
          className="w-full h-full"
          width={0}
          height={0}
          unoptimized
        />
      </div>
    </div>
  );
};

export default BestDeal;
