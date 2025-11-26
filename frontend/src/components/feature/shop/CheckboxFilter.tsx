"use client";

import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxFilterProps {
  title: string;
  options: CheckboxOption[];
}

type Props = CheckboxFilterProps &
  React.ComponentProps<typeof CheckboxPrimitive.Root>;

const CheckboxFilter: React.FC<Props> = ({ title, options }) => {
  return (
    <div className="bg-white shadow-custom py-4 rounded-md">
      <h4 className="font-medium text-lg px-4 border-b pb-4 mb-4">{title}</h4>

      <ScrollArea>
        <ul className="space-y-1.5 px-4 max-h-[210px]">
          {options.map((option, index) => (
            <li key={index}>
              <Label className="flex items-center space-x-1.5 text-sm">
                <Checkbox />
                <span>{option.label}</span>
              </Label>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default CheckboxFilter;
