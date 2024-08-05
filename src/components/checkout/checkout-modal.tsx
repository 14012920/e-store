"use client";
import CheckoutAddress from "@/components/checkout/checkout-address";
import CheckoutFooter from "@/components/checkout/checkout-footer";
import CheckoutHeader from "@/components/checkout/checkout-header";
import ContactForm from "@/components/checkout/contact-form";
import OrderSummery from "@/components/checkout/order-summery";
import { Loader, X } from "lucide-react";
import Script from "next/script";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
const CheckoutModal = ({
  openModal,
  setOpenModal,
  onChangeModal,
  loader,
  setIsLoader,
}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState("mobile");
  const [stepCompleted, setStepComplete] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [mobile, setMobile] = useState("");
  const [type, setType] = useState("login");
  const [OTP, setOTP] = useState("");

  useEffect(() => {
    const timout = setTimeout(() => {
      setIsLoader(false);
    }, 2000);
    return () => clearTimeout(timout);
  }, [openModal]);

  useEffect(() => {
    if (/^[6-9]\d{9}$/.test(mobile)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [mobile]);

  const onChangeMobile = (e: any) => {
    setMobile(e.target.value);
    console.log("e", e.target.value);
  };

  const onChangeOTP = (e: any) => {
    console.log("e", e);
    setOTP(e);
  };
  const onClickButton = (e: any) => {
    e.preventDefault();

    if (type === "login") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setType("otp");
      }, 2000);
    }
    if (type === "otp") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setActiveStep("address");
        setStepComplete("mobile");
        setType("address");
      }, 2000);
    }
    if (type === "address") {
      setIsLoading(true);
      setStepComplete("address");
      setActiveStep("payment");
      handlePayment();
    }
  };
  const selectedAddress = {
    address: "ho.16 1610 dev nagar",
    pinCode: 125001,
    city: "hisar",
    state: "Haryana",
    phoneNo: 9876543210,
  };
  const saveOrder = (order_id: string) => {
    // const shippingInfo = {
    //   address: selectedAddress?.address,
    //   pinCode: selectedAddress?.pinCode,
    //   city: selectedAddress?.city,
    //   state: selectedAddress?.state,
    //   country: "india",
    //   phoneNo: selectedAddress?.phoneNo,
    // };
    // const path = process.env.NEXT_PUBLIC_API_PATH;
    // fetch(`${path}/api/order/createorder`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     order_id: order_id,
    //     user: user?._id,
    //     totalPrice: 4900
    //     products: [],
    //     shippingInfo,
    //     shippingCharge: 20,
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then((res) => {
    //     if (res?.status === 200) {
    //       router.push("/success");
    //     } else {
    //       toast.error("Something went wrong 😑");
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error("Something went wrong 😑");
    //     console.log(error);
    //   });
  };
  const createOrder = async () => {
    try {
      const path = process.env.NEXT_PUBLIC_API_PATH;
      const data = await fetch(`${path}/api/payment/razorpay`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 499 * 100,
          currency: "INR",
        }),
      });
      const response = await data.json();
      return response;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };

  const handlePayment = async () => {
    try {
      onChangeModal();
      setIsLoading(true);
      const order = await createOrder();
      console.log("myorder", order);
      if (order) {
        const options = {
          key: "rzp_test_U1odAZx2aIXLbD",
          amount: 499 * 100,
          currency: "INR",
          name: "Saucefin",
          prefill: { contact: 8529991516 },
          readonly: { contact: false },
          checkout: {
            method: {
              netbanking: 0,
              card: 1,
              upi: 1,
              wallet: 1,
            },
            notes: {
              key1: "value3",
              key2: "value2",
            },
          },
          order_id: order.id,
          handler: async (response: any) => {
            const data = {
              orderCreationId: order?.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
            const path = process.env.NEXT_PUBLIC_API_PATH;
            const result = await fetch(`${path}/api/payment/verify`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(data),
            });
            console.log("verify result", result);
            if (result?.ok) {
              setIsLoading(false);
              // saveOrder(response.razorpay_order_id);
            }
          },
          theme: {
            color: "#8e394c",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.on("payment.failed", function (response: any) {
          alert(response.error.reason);
        });
        paymentObject.open();
      } else {
        setIsLoading(false);
        toast.error("Something went wrong 😑");
      }
    } catch (error) {
      toast.error("there is some issue,Please try again 😑");
      setIsLoading(false);
    }
  };
  //   const onChangeModal = () => {
  //     setOpenModal(false);
  //     router.back();
  //   };
  return (
    <Dialog open={openModal} modal={false}>
      <DialogContent
        className="h-[500px] bg-slate-50 p-0 m-0"
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
        onPointerDownOutside={(e) => {
          e.preventDefault();
        }}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogClose
          asChild
          className="bg-white w-10 h-10 mb-1 p-0 m-0 absolute right-[-5px] top-[-5px] z-20 rounded-full hover:z-30"
        >
          <Button variant="ghost" onClick={onChangeModal}>
            <X className="h-6 w-6" color="#8e394c" />
          </Button>
        </DialogClose>
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />

        {loader ? (
          <div className="absolute top-[42%] right-[43%] mx-auto">
            <Loader
              className="h-12 w-12 my-2 animate-spin ml-4"
              color="#8e394c"
            />
            <p className="font-semibold">intializing...</p>
          </div>
        ) : (
          <div className="grid grid-cols-7 overflow-x-auto">
            <div className="h-full bg-white col-span-4">
              <div className="overflow-y-auto">
                <CheckoutHeader
                  activeStep={activeStep}
                  stepCompleted={stepCompleted}
                  isDesktop={true}
                />
                {(type === "login" || type === "otp") && (
                  <ContactForm
                    mobile={mobile}
                    onChangeMobile={onChangeMobile}
                    otp={OTP}
                    onChangeOTP={onChangeOTP}
                    type={type}
                  />
                )}
                {type === "address" && <CheckoutAddress />}

                <CheckoutFooter
                  disabled={disabled}
                  onClickButton={onClickButton}
                  isLoading={isLoading}
                  isDesktop={true}
                  type={type}
                />
              </div>
            </div>

            <div className=" h-full col-span-3">
              <OrderSummery />
            </div>
          </div>
        )}
      </DialogContent>

      {/* <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      /> */}
    </Dialog>
  );
};

export default CheckoutModal;