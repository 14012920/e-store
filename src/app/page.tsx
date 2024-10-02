import { AppCarousel } from "@/components/appCarousel";
import AppContainer from "@/components/appContainer";
import BestDeal from "@/components/best-deal";
import Category from "@/components/category";
import ProductBenifts from "@/components/product-benifts";
import { ProductCarousel } from "@/components/productCarousel";
import { Button } from "@/components/ui/button";
import { fetchBanners, fetchCats, fetchProductByCatId } from "@/lib/action";
import { fetchProducts } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
  const page = 1;
  const { productByCatId } = await fetchProductByCatId("Home Decor", page);
  const {banners} = await fetchBanners()
  console.log("productByCatId",banners)
  const { cats } = await fetchCats();

  return (
    <main className="flex min-h-screen flex-col overflow-y-scroll no-scrollbar">
      <AppContainer>
        <AppCarousel banners={banners} />
        <div className="px-4 py-4 lg:px-28">
          <Category title="CATEGORY" allCats={cats} />
        </div>
        <div>
          <BestDeal />
        </div>
        <div className="px-4 py-4 lg:px-28">
          <ProductBenifts />
        </div>

      

        <div className="px-4 py-4 lg:px-24 lg:mt-8">
          <ProductCarousel
            isShowTitle={true}
            title={"NEW"}
            hightLighted="ARRIVAL"
            data={productByCatId}
          />
          <div className="flex flex-1 items-center py-8 justify-center">
            <Link href={"/view-all"}>
              <Button className="border-none text-white hover:bg-primary">
                VIEW ALL PRODUCTS
              </Button>
            </Link>
          </div>

          {/* <div>
            <Category title="COMBO" allProducts={data2} />
          </div> */}
        </div>
      </AppContainer>
    </main>
  );
}
