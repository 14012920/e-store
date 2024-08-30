import AppContainer from "@/components/appContainer";

const ShippingPolicy = () => {
  return (
    <AppContainer>
      <div className="min-h-screen flex flex-col overflow-y-auto p-4 items-center">
        <div className="max-w-[600px]">
          <p className="font-semibold text-2xl mt-8">Shipping Policy</p>
          <p className="tracking-widest font-medium">
            Last updated: August 19, 2024
          </p>
          <p className="tracking-wide my-8 leading-8">
            At DuoPrimp, we aim to provide efficient delivery services to our
            customers across India.
            <br />
            <span className="tracking-widest font-medium py-2">
              Delivery Timeframe
            </span>
            <br />
            All items purchased from our store are shipped pan India and
            typically delivered within 5-7 business days from the date of order
            placement.
            <br />
            <span className="tracking-widest font-medium py-2">
              Possible Delays
            </span>
            <br />
            While we strive to ensure timely delivery, please understand that
            occasional delays may occur due to unforeseen circumstances beyond
            our control. We appreciate your patience and understanding in such
            situations.
            <br />
            <span className="tracking-widest font-medium py-2">
              Contact Us
            </span>{" "}
            <br />
            If you have any questions or require assistance regarding your order
            or delivery, please do not hesitate to reach out to us at
            duoprimpstore@gmail.com . Our dedicated customer support team is
            here to help.
          </p>
        </div>
      </div>
    </AppContainer>
  );
};
export default ShippingPolicy;
