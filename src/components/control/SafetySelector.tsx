"use client";


import * as React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SafetySelectorProps {
  label: string;
}

export function SafetySelector({ label }: SafetySelectorProps) {
  // Retrieve the initial value from localStorage or use a default value
  const initialValue = parseInt(localStorage.getItem(`${label}_value`) || "0", 10);
  const [value, setValue] = React.useState(initialValue);

  // Function to handle value change and save to localStorage
  const handleValueChange = (newValue: number[]) => {
    const newValueInt = newValue[0];
    setValue(newValueInt);
    // Save the new value to localStorage
    localStorage.setItem(`${label}_value`, newValueInt.toString());
  };

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor={label}>{label}</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {value === 0
                  ? "none"
                  : value === 1
                  ? "few"
                  : value === 2
                  ? "some"
                  : "most"}
              </span>
            </div>
            <Slider
              id={label}
              max={3}
              defaultValue={[value]}
              step={1}
              onValueChange={handleValueChange}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label={label}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="right"
        >
          Block medium or high probability of being harmful.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
