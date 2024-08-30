import AppContainer from "@/components/appContainer";

const ReturnPolicy = () => {
  return (
    <AppContainer>
      <div className="min-h-screen flex flex-col overflow-y-auto p-4 items-center">
        <div className="max-w-[600px]">
          <p className="font-semibold text-2xl mt-8">Return Policy</p>
          <p className="tracking-widest font-medium">
            Last updated: August 19, 2024
          </p>
          <p className="tracking-wide my-8 leading-8">
            We have a 30-day return policy, which means you have 30 days after
            receiving your item to request a return. To be eligible for a
            return, your item must be in the same condition that you received
            it, unworn or unused, with tags, and in its original packaging.
            You’ll also need the receipt or proof of purchase. To start a
            return, you can contact us at sonimanoj038@gmail.com. Please note
            that returns will need to be sent to the following address: [INSERT
            RETURN ADDRESS] If your return is accepted, we’ll send you a return
            shipping label, as well as instructions on how and where to send
            your package. Items sent back to us without first requesting a
            return will not be accepted. You can always contact us for any
            return question at sonimanoj038@gmail.com.
            <br />
            <span className="tracking-widest font-medium py-2">
              Damages and issues
            </span>
            <br />
            Please inspect your order upon reception and contact us immediately
            if the item is defective, damaged or if you receive the wrong item,
            so that we can evaluate the issue and make it right.
            <br />
            <span className="tracking-widest font-medium py-2">
              Exceptions / non-returnable items
            </span>
            <br />
            Certain types of items cannot be returned, like perishable goods
            (such as food, flowers, or plants), custom products (such as special
            orders or personalized items), and personal care goods (such as
            beauty products). We also do not accept returns for hazardous
            materials, flammable liquids, or gases. Please get in touch if you
            have questions or concerns about your specific item. Unfortunately,
            we cannot accept returns on sale items or gift cards.
            <br />
            <span className="tracking-widest font-medium py-2">
              Exchanges
            </span>{" "}
            <br />
            The fastest way to ensure you get what you want is to return the
            item you have, and once the return is accepted, make a separate
            purchase for the new item.
            <br />
            <span className="tracking-widest font-medium py-2">
              Refunds
            </span>{" "}
            <br />
            We will notify you once we’ve received and inspected your return,
            and let you know if the refund was approved or not. If approved,
            you’ll be automatically refunded on your original payment method
            within 10 business days. Please remember it can take some time for
            your bank or credit card company to process and post the refund too.
            If more than 15 business days have passed since we’ve approved your
            return, please contact us at sonimanoj038@gmail.com.
          </p>
        </div>
      </div>
    </AppContainer>
  );
};
export default ReturnPolicy;
