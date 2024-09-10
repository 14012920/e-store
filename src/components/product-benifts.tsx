import Image from "next/image";
const ProductBenifts = () => {
  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-2">
      <div className="h-96 w-full border">
        <Image
          src={"/printer-use.webp"}
          alt={`printer-use`}
          className="w-full h-full"
          width={0}
          height={0}
          unoptimized
        />
      </div>
      <div className="flex flex-col item-center w-full py-4 px-8">
        <h3 className="font-medium text-brandText lg:text-xl tracking-wider">
          {"THE PRODUCTS"}
        </h3>
        <h1 className="font-semibold text-2xl lg:text-3xl text-navbarTextColor">
          {"Benefits Of Fabulous"}
        </h1>

        <div className="w-32 h-1 bg-brandSecondary mt-3" />
        <div className="py-8 text-[#888] font-light">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <div className="flex flex-wrap text-sm justify-between w-[90%]">
            <div className="flex items-center gap-2 p-2">
              <div className="w-[10px] h-[10px] rounded-full bg-brandSecondary" />
              <p>Easy to Carry and Charge</p>
            </div>
            <div className="flex items-center gap-2  p-2">
              <div className="w-[10px] h-[10px] rounded-full bg-brandSecondary" />
              <p>Easy to Carry and Charge</p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <div className="w-[10px] h-[10px] rounded-full bg-brandSecondary" />
              <p>Easy to Carry and Charge</p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <div className="w-[10px] h-[10px] rounded-full bg-brandSecondary" />
              <p>Easy to Carry and Charge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBenifts;
