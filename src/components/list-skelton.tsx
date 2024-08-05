import { useMediaQuery } from "./hooks/use-media-query";

const ListSkelton = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <div className="grid grid-cols-2 gap-2 mt-2 lg:grid-cols-4">
        <div className="border-none cursor-pointer animate-pulse">
          <div className="p-0 m-0 h-52 lg:h-80 min-w-full">
            <div className="object-fill w-full lg:h-80 h-52 bg-gray-200"></div>
          </div>
          <div className="p-2 flex flex-col">
            <div>
              <div className="text-xs text-center mb-2 lg:text-sm uppercase h-4 bg-gray-200 w-1/3"></div>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="lg:flex lg:flex-row lg:gap-2">
                <div className="font-normal text-xs text-red-500 lg:text-sm h-4 bg-gray-200 w-1/4"></div>
                <div className="font-normal text-xs text-gray-500 line-through lg:text-sm h-4 bg-gray-200 w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-none cursor-pointer animate-pulse">
          <div className="p-0 m-0 h-52 lg:h-80 min-w-full">
            <div className="object-fill w-full lg:h-80 h-52 bg-gray-200"></div>
          </div>
          <div className="p-2 flex flex-col">
            <div>
              <div className="text-xs text-center mb-2 lg:text-sm uppercase h-4 bg-gray-200 w-1/3"></div>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="lg:flex lg:flex-row lg:gap-2">
                <div className="font-normal text-xs text-red-500 lg:text-sm h-4 bg-gray-200 w-1/4"></div>
                <div className="font-normal text-xs text-gray-500 line-through lg:text-sm h-4 bg-gray-200 w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-none cursor-pointer animate-pulse">
          <div className="p-0 m-0 h-52 lg:h-80 min-w-full">
            <div className="object-fill w-full lg:h-80 h-52 bg-gray-200"></div>
          </div>
          <div className="p-2 flex flex-col">
            <div>
              <div className="text-xs text-center mb-2 lg:text-sm uppercase h-4 bg-gray-200 w-1/3"></div>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="lg:flex lg:flex-row lg:gap-2">
                <div className="font-normal text-xs text-red-500 lg:text-sm h-4 bg-gray-200 w-1/4"></div>
                <div className="font-normal text-xs text-gray-500 line-through lg:text-sm h-4 bg-gray-200 w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-none cursor-pointer animate-pulse">
          <div className="p-0 m-0 h-52 lg:h-80 min-w-full">
            <div className="object-fill w-full lg:h-80 h-52 bg-gray-200"></div>
          </div>
          <div className="p-2 flex flex-col">
            <div></div>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="lg:flex lg:flex-row lg:gap-2">
                <div className="font-normal text-xs text-red-500 lg:text-sm h-4 bg-gray-200 w-1/4"></div>
                <div className="font-normal text-xs text-gray-500 line-through lg:text-sm h-4 bg-gray-200 w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2 mt-2 lg:grid-cols-4">
      <div className="border-none cursor-pointer animate-pulse">
        <div className="p-0 m-0 h-52 lg:h-80 min-w-full">
          <div className="object-fill w-full lg:h-80 h-52 bg-gray-200"></div>
        </div>
        <div className="p-2 flex flex-col">
          <div>
            <div className="text-xs text-center mb-2 lg:text-sm uppercase h-4 bg-gray-200 w-1/3"></div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="lg:flex lg:flex-row lg:gap-2">
              <div className="font-normal text-xs text-red-500 lg:text-sm h-4 bg-gray-200 w-1/4"></div>
              <div className="font-normal text-xs text-gray-500 line-through lg:text-sm h-4 bg-gray-200 w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-none cursor-pointer animate-pulse">
        <div className="p-0 m-0 h-52 lg:h-80 min-w-full">
          <div className="object-fill w-full lg:h-80 h-52 bg-gray-200"></div>
        </div>
        <div className="p-2 flex flex-col">
          <div>
            <div className="text-xs text-center mb-2 lg:text-sm uppercase h-4 bg-gray-200 w-1/3"></div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="lg:flex lg:flex-row lg:gap-2">
              <div className="font-normal text-xs text-red-500 lg:text-sm h-4 bg-gray-200 w-1/4"></div>
              <div className="font-normal text-xs text-gray-500 line-through lg:text-sm h-4 bg-gray-200 w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSkelton;
