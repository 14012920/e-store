/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "./ui/button";
import { useMediaQuery } from "./hooks/use-media-query";

import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/hooks/useCartStore";
import { createCheckoutOrder, verifyPayment } from "@/lib/service";
import MobileCart from "./mobile-cart";
import DesktopCart from "./desktop-cart";

const AppHeader = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { cartCount, cartProducts, total, resetCart, plusItem, removeItem, deleteItem } =
    useCartStore();

  console.log("cartProducts", cartProducts);
  const getSKU = (str:string)=>{
    
    var str2 = str.toLowerCase()?.split(' ');
    if(str2.length ==1){
        return str2[0]
    }
 if(str2.length ==2){
        return str2[0]+str2[1]
    }
  let final =''  ;
  for(let i = 0; i<str2.length;i++){
     final = final+ str2[i]?.charAt(0);
 }
  return final
  }
  const handlePayment = async () => {
    setIsOpen(false);
    const lineItems = cartProducts?.map((item: any) => {
      return {
        price: item?.discountedPrice * 100,
        quantity: item?.qty,
        name: item?.title,
        image_url: item?.images[0],
        sku:getSKU(item?.title),
      };
    });
    try {
      const payload = {
        amount: total * 100,
        currency: "INR",
        line_items: lineItems,
        notes: lineItems[0],
      };
      const order = await createCheckoutOrder(payload);
      console.log("myorder2222", payload, order);
      const key = process.env.RAZORPAY_APP_ID;
      if (order) {
        const options = {
          key: key,
          currency: "INR",
          one_click_checkout: true,
          show_coupons: false,
          name: "DuoPrimp",
          order_id: order.id,
          notes: lineItems[0],
          handler: async (response: any) => {
            const data = {
              orderCreationId: order?.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
            const result = await verifyPayment(data);
            if (result?.isOk) {
              resetCart();
              router.push("/success");
            }
          },
          // theme: {
          //   color: "#3c3c3c",
          // },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.on("payment.failed", function (response: any) {
          alert(response.error.reason);
        });
        paymentObject.open();
      } else {
        toast.error("Something went wrong 😑");
      }
    } catch (error) {
      toast.error("there is some issue,Please try again 😑");
    }
  };

  const onClickDelete = (item: any, qty: number) => {
    deleteItem(item, qty);
  };
  const onClickPlus = (item: any, qty: number) => {
    plusItem(item, qty);
  };
  const onClickMinus = (item: any, qty: number) => {
    removeItem(item);
  };

  if (isDesktop) {
    return (
      <>
        <DesktopCart
          cartProducts={cartProducts}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          total={total}
          handlePayment={handlePayment}
          cartCount={cartCount}
          onClickDelete={(item: any, qty: any) => onClickDelete(item, item?.qty)}
          onClickMinus={(item: any, qty: any) => onClickMinus(item, qty)}
          onClickPlus={(item: any, qty: any) => onClickPlus(item, qty)}
        />
      </>
    );
  }
  return (
    <>
      <MobileCart
        cartProducts={cartProducts}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        total={total}
        handlePayment={handlePayment}
        cartCount={cartCount}
        onClickDelete={(item: any, qty: any) => onClickDelete(item, item?.qty)}
        onClickMinus={(item: any, qty: any) => onClickMinus(item, qty)}
        onClickPlus={(item: any, qty: any) => onClickPlus(item, qty)}
      />
    </>
  );
};

export default AppHeader;
