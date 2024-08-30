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
  const {
    cartCount,
    cartProducts,
    total,
    resetCart,
    plusItem,
    removeItem,
    deleteItem,
  } = useCartStore();

  console.log("cartProducts", cartProducts);

  const handlePayment = async () => {
    setIsOpen(false);
    const lineItems = cartProducts?.map((item: any) => {
      return {
        price: item?.discountedPrice * 100,
        quantity: item?.qty,
        name: item?.title,
        image_url: item?.images[0],
      };
    });
    try {
      const payload = {
        amount: total * 100,
        currency: "INR",
        line_items: lineItems,
      };
      const order = await createCheckoutOrder(payload);
      console.log("myorder", order);
      if (order) {
        const options = {
          key: "rzp_test_U1odAZx2aIXLbD",
          currency: "INR",
          one_click_checkout: true,
          show_coupons: false,
          name: "DueoPrimp",
          order_id: order.id,
          handler: async (response: any) => {
            const data = {
              orderCreationId: order?.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
            const result = await verifyPayment(data);
            console.log("verify result", result);
            if (result?.isOk) {
              resetCart();
              router.push("/success");
              // saveOrder(response.razorpay_order_id);
            }
          },
          theme: {
            color: "#0c1424",
          },
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
          onClickDelete={(item: any, qty: any) =>
            onClickDelete(item, item?.qty)
          }
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
