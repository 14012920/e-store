import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
const ContactForm = ({
  type,
  otp,
  onChangeMobile,
  onChangeOTP,
  mobile,
}: any) => {
  if (type === "otp") {
    return (
      <div className="flex  bg-white flex-col items-center pt-5 overflow-y-autotransition-all scale-y-100 duration-700">
        <div className="flex items-center font-medium">
          <p>Verify Mobile Number</p>
        </div>
        <div className="flex items-center font-medium text-xs py-1">
          <p>To Use Your Saved Address, Enter the OTP Sent to</p>
        </div>
        <div className="flex items-center font-medium  text-primary underline underline-offset-2">
          <p>+91-8529991516</p>
        </div>
        <div className="flex py-4">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => onChangeOTP(value)}
            pattern={REGEXP_ONLY_DIGITS}
            className="border-none focus:border-none focus:outline-none"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    );
  }

  return (
    <div className="flex  min-h-screen bg-white flex-col items-center pt-3 overflow-y-auto ">
      <div className="flex items-center font-medium">
        <p>Enter Mobile Number</p>
      </div>
      <div className="flex gap-1 p-1 rounded-md border m-2 item-center  border-slate-950">
        <div className="flex items-center font-medium">
          <p>+91</p>
          <Separator orientation="vertical" className="mx-2 h-7 bg-slate-900" />
        </div>
        <Input
          type="tel"
          placeholder="Enter Number"
          onChange={onChangeMobile}
          value={mobile}
          maxLength={10}
          className="tracking-wider max-w-[95%] border-none pl-1 focus:outline-none focus:border-none text-md"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked />
        <label
          htmlFor="terms"
          className="font-medium text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Notify me for orders,update and offers
        </label>
      </div>
    </div>
  );
};

export default ContactForm;
