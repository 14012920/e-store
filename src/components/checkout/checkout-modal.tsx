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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CheckoutPayment from "./checkout-payment";
const CheckoutModal = ({
  openModal,
  openQuitModal,
  onChangeModal,
  loader,
  setIsLoader,
  onchangeQuitModal,
}: any) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [stepCompleted, setStepComplete] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [mobile, setMobile] = useState("");
  const [type, setType] = useState("login");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
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
        setActiveStep(2);
        setStepComplete(1);
        setType("address");
      }, 2000);
    }
    if (type === "address") {
      setStepComplete(2);
      setActiveStep(3);
      setType("payment");
    }
    if (type === "payment") {
      setIsLoading(true);
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
          amount: 49 * 100,
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
      setIsLoading(true);
      const order = await createOrder();
      console.log("myorder", order);
      if (order) {
        const options = {
          key: "rzp_test_U1odAZx2aIXLbD",
          currency: "INR",
          one_click_checkout: true,
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
              setPaymentSuccess(true);
              setTimeout(() => {
                router.replace("/");
              }, 3000);
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
        setIsLoading(false);
        toast.error("Something went wrong 😑");
      }
    } catch (error) {
      toast.error("there is some issue,Please try again 😑");
      setIsLoading(false);
    }
  };
  const onClickBack = (e: any) => {
    console.log("clikcked");
    e.preventDefault();
    if (type === "login") {
      onChangeModal();
    }
    if (type === "otp") {
      setActiveStep(1);
      setStepComplete(0);
      setType("login");
    }
    if (type === "address") {
      setStepComplete(0);
      setActiveStep(1);
      setType("login");
    }
    if (type === "payment") {
      setStepComplete(1);
      setActiveStep(2);
      setType("address");
    }
  };
  return (
    <Dialog open={openModal} modal={false}>
      <DialogContent
        className="h-[550px] bg-slate-50 p-0 m-0"
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
          <Button variant="ghost" onClick={onchangeQuitModal}>
            <X className="h-6 w-6" color="#0c1424" />
          </Button>
        </DialogClose>

        {loader ? (
          <div className="absolute top-[42%] right-[43%] mx-auto">
            <Loader className="h-12 w-12 my-2 animate-spin ml-4" color="#0c1424" />
            <p className="font-semibold">intializing...</p>
          </div>
        ) : paymentSuccess ? (
          <div className="absolute top-[35%] right-[43%] mx-auto">
            <Image src={"/success.gif"} height={150} width={150} alt="success" className="ml-8" />
            <p className="font-semibold">Order placed succefully!</p>
          </div>
        ) : (
          <div className="grid grid-cols-7 overflow-x-auto">
            <div className="h-full bg-white col-span-4">
              <div className="overflow-y-auto">
                <CheckoutHeader
                  activeStep={activeStep}
                  stepCompleted={stepCompleted}
                  isDesktop={true}
                  onClickBack={onClickBack}
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
                {type === "payment" && <CheckoutPayment />}
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
      <Dialog open={openQuitModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              Products in <span className="text-yellow-600">huge demand</span>
            </DialogTitle>
            <DialogDescription>
              Product might run Out of Stock.Are you sure you want to cancel payment?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={onChangeModal}>
              Yes
            </Button>
            <Button variant="ghost" onClick={onchangeQuitModal}>
              No
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
};

export default CheckoutModal;
