import Link from "next/link";
const Category = ({ allCats, title }: any) => {
  return (
    <div>
      <div className="flex flex-col justify-center  w-full py-4 my-8">
        <h3 className="font-medium text-brandText lg:text-xl tracking-wider">
          {"Shop By"}
        </h3>
        <h1 className="font-semibold text-2xl lg:text-3xl text-navbarTextColor">
          {title}
        </h1>
        <div className="w-32 h-1 bg-brandSecondary mt-3" />
      </div>

      <div className="grid grid-cols-3 lg:overflow-x-auto lg:flex lg:no-scrollbar gap-3 lg:gap-4">
        {allCats.map((item: any, index: number) => (
          <Link href={`/view-all`} key={index}>
            <div className="flex flex-col items-center text-center gap-2">
              <img
                src={item?.image}
                alt={`alt-p1`}
                className={`object-fill min-w-28 min-h-28 rounded-full`}
              />

              <p className="text-sm lg:text-lg">{item?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Category;
