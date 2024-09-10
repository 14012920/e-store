import { useCountdown } from "@/hooks/useCountDown";
import React from "react";

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  console.log(days, hours, minutes, seconds);
  return (
    <div className="flex flex-row items-center justify-center sm:px-4">
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="py-3 px-3 flex justify-center items-center bg-[#dfede3] text-[#112D32] text-3xl font-semibold rounded-md">
          0{days}
        </span>
        <span className="text-sm  font-bold">{days == 1 ? "Day" : "Days"}</span>
      </div>
      <div className="mx-2" />
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="py-3 px-3 bg-[#dfede3] text-[#112D32] text-3xl font-semibold rounded-md">
          {hours}
        </span>
        <span className="text-sm  font-bold">
          {hours == 1 ? "Hour" : "Hours"}
        </span>
      </div>
      <div className="mx-2" />
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="py-3 px-3 bg-[#dfede3] text-[#112D32] text-3xl font-semibold rounded-md">
          {minutes}
        </span>
        <span className="text-sm  font-bold">
          {minutes == 1 ? "Minute" : "Minutes"}
        </span>
      </div>
      <div className="mx-2" />
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="py-3 px-3 bg-[#dfede3] text-[#112D32] text-3xl font-semibold rounded-md">
          {seconds}
        </span>
        <span className="text-sm  font-bold">
          {seconds == 1 ? "Second" : "Seconds"}
        </span>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountdownTimer;
