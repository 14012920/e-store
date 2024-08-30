import { AppCarousel } from "@/components/appCarousel";
import AppContainer from "@/components/appContainer";
import Category from "@/components/category";
import { ProductCarousel } from "@/components/productCarousel";
import { Button } from "@/components/ui/button";
import { fetchProductByCatId } from "@/lib/action";
import { fetchProducts } from "@/lib/data";
import Link from "next/link";
const data1 = [
  { title: "zipper neck / v-neck tshirt", image: "/cat1.webp" },
  { title: "round-neck / v-neck tshirt", image: "/cat3.webp" },
  { title: "pents / v-neck tshirt", image: "/cat2.webp" },
];
const prodct1 = [
  {
    title: "Black Printed Round Neck T-Shirt",
    image: "/p1.webp",
    price: 399,
    mrp: 1999,
  },
  {
    title: "Men White Round Neck Black Piping T-Shirt",
    image: "/p2.webp",
    price: 299,
    mrp: 1949,
  },
  {
    title: "Men Flap-pocket Black Shorts",
    image: "/p1.webp",
    price: 423,
    mrp: 1299,
  },
  {
    title: "Black Printed Round Neck T-Shirt",
    image: "/p1.webp",
    price: 399,
    mrp: 1999,
  },
  {
    title: "Men White Round Neck Black Piping T-Shirt",
    image: "/p2.webp",
    price: 299,
    mrp: 1949,
  },
];
const prodct2 = [
  {
    title: "Black Printed Round Neck T-Shirt",
    image: "/p2.webp",
    price: 399,
    mrp: 1999,
  },
  {
    title: "Men White Round Neck Black Piping T-Shirt",
    image: "/p1.webp",
    price: 299,
    mrp: 1949,
  },
  {
    title: "Men Flap-pocket Black Shorts",
    image: "/p2.webp",
    price: 423,
    mrp: 1299,
  },
  {
    title: "Black Printed Round Neck T-Shirt",
    image: "/p2.webp",
    price: 399,
    mrp: 1999,
  },
  {
    title: "Men White Round Neck Black Piping T-Shirt",
    image: "/p1.webp",
    price: 299,
    mrp: 1949,
  },
];
const data2 = [
  {
    title: "men t-shirt combo",
    image: "/combo1.webp",
    subTitle: "fROM Rs 199 STARTS",
  },
  {
    title: "man trakpant combo",
    image: "/comb2.webp",
    subTitle: "fROM Rs 249 STARTS",
  },
  {
    title: "kids combo",
    image: "/combo3.webp",
    subTitle: "fROM Rs 149 STARTS",
  },
];
export default async function Home() {
  const page = 1;
  const { productByCatId } = await fetchProductByCatId("Cloths", page);
  console.log("prodct", "count", productByCatId);
  return (
    <main className="flex min-h-screen flex-col overflow-y-scroll no-scrollbar">
      <AppContainer>
        <AppCarousel />
        <div className="px-4 py-4 lg:px-24 lg:mt-16">
          <ProductCarousel
            isShowTitle={true}
            title={"NEW"}
            hightLighted="ARRIVAL"
            data={productByCatId}
          />
          <div className="flex flex-1 items-center py-8 justify-center">
            <Link href={"/view-all"}>
              <Button className="border-none hover:bg-primary">
                VIEW ALL PRODUCTS
              </Button>
            </Link>
          </div>
          <div className="lg:my-8">
            <Category title="CATEGORY" allProducts={data1} />
          </div>

          {/* <div className="lg:my-8">
            <ProductCarousel
              isShowTitle={true}
              title={"CLEARANCE"}
              hightLighted="SALE"
              data={prodct2}
            />
            <div className="flex flex-1 items-center py-8 justify-center">
              <Link href={"/view-all"}>
                <Button className="border-none hover:bg-primary">
                  VIEW ALL PRODUCTS
                </Button>
              </Link>
            </div>
          </div> */}
          <div>
            <Category title="COMBO" allProducts={data2} />
          </div>
        </div>
      </AppContainer>
    </main>
  );
}
