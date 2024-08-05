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
import { fetchProducts } from "@/lib/data";
import { Loader, Slash } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ViewAll = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0,
    trackVisibility: true,
    delay: 1000,
  });
  console.log("inview", inView);
  const loadProducts = async () => {
    const { products } = await fetchProducts("", page);
    setAllProducts(products || []);
  };

  const loadMoreProducts = useCallback(async () => {
    const { count, products } = await fetchProducts("", page + 1);
    console.log("productsAPI******", products);
    if (count < 6) {
      setHasMoreData(false);
    }
    setAllProducts((prevData) => [...prevData, ...products]);
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
  console.log("products", allProducts);
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
                <BreadcrumbLink href="/">View All</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col  mt-8">
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
            <div className="flex flex-1 flex-col items-center">
              <Loader className="h-12 w-12 my-2 animate-spin" color="#8e394c" />
            </div>
          )}
        </div>
      </div>
    </AppContainer>
  );
};
export default ViewAll;
