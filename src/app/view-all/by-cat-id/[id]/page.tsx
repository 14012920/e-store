"use client";
import AppContainer from "@/components/appContainer";
import ListSkelton from "@/components/list-skelton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { fetchProductByCatId } from "@/lib/action";
import { fetchProducts } from "@/lib/data";
import { Loader, Slash } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ViewByCatID = ({ params }: { params: { id: string } }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0,
    trackVisibility: true,
    delay: 1000,
  });

  const loadProducts = async () => {
    setLoading(true)
    const cid = decodeURI(params.id).replace(/[{}]/g, "")
   
    const { productByCatId } = JSON.parse(
      JSON.stringify( await fetchProductByCatId(cid, page))
    );
    setAllProducts(productByCatId || []);
    setLoading(false)
  };

  const loadMoreProducts = useCallback(async () => {
    const cid = decodeURI(params.id).replace(/[{}]/g, "")
    const { count, productByCatId } =  await fetchProductByCatId(cid, page + 1);
    if (count < 6) {
      setHasMoreData(false);
    }
    setAllProducts((prevData) => [...prevData, ...productByCatId]);
    setPage(page + 1);
  }, [page]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (inView && hasMoreData) {
      loadMoreProducts();
    }
  }, [inView, hasMoreData]);
  console.log("CATPRODUCTS", allProducts);
  return (
    <AppContainer>
      <div className="px-4 py-4 lg:px-24">
        <div className="flex flex-row justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">{decodeURI(params.id).replace(/[{}]/g, "")}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col min-h-screen mt-8">
          {allProducts?.length ? (
            <>
              <div className="p-0 m-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-2">
                {allProducts?.map((item: any, index) => (
                  <Link href={`/product-detail/${item?._id}`} key={index}>
                    <Card className="border-none cursor-pointer">
                      <CardContent className="p-0 m-0 h-52 lg:h-80 min-w-full">
                        <img
                          src={item?.images[0]}
                          alt={`alt-p1`}
                          className="object-fill w-full lg:h-80 h-52"
                        />
                      </CardContent>
                      <CardFooter className="p-2 flex flex-col">
                        <div>
                          <p className="text-xs text-center mb-2 lg:text-sm uppercase">
                            {item?.title}
                          </p>
                        </div>
                        <div className="flex flex-row w-full justify-between items-center">
                          <div className="lg:flex lg:flex-row lg:gap-2">
                            <p className="font-normal text-xs text-red-500 lg:text-sm">
                              Rs. {item?.price}
                            </p>
                            <p className="font-normal text-xs text-gray-500 line-through lg:text-sm">
                              Rs. {Math.floor(item?.price * 3)}
                            </p>
                          </div>

                          <div className="bg-red-500 p-1 text-xs lg:text-sm text-white">
                            <p>80% OFF</p>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
              {hasMoreData && (
                <div ref={ref}>
                  <ListSkelton />
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center text-center">
             <h1>No Product available</h1>
            </div>
          )}
          {loading? <div className="flex flex-1 flex-col items-center">
              <Loader className="h-12 w-12 my-2 animate-spin" color="#0c1424" />
            </div>:null}
        </div>
      </div>
    </AppContainer>
  );
};
export default ViewByCatID;
