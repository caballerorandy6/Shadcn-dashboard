"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="sm:flex sm:flex-wrap flex-col gap-4 md:flex-row">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border shadow"
      />

      <div>
        <h1 className="text-3xl">Information</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>
          {multipleDates
            ?.map((date) => date.toLocaleDateString("en-US"))
            .join(", ")}
        </p>
      </div>
    </div>
  );
}
