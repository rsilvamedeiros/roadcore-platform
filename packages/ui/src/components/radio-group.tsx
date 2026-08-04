"use client";

import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import type { ReactNode } from "react";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  label: ReactNode;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  onValueChange?: (value: string) => void;
}

export function RadioGroup({
  label,
  options,
  value,
  defaultValue,
  disabled,
  name,
  onValueChange,
}: RadioGroupProps) {
  return (
    <ArkRadioGroup.Root
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onValueChange={(details) => {
        if (details.value) onValueChange?.(details.value);
      }}
      className="flex flex-col gap-2"
    >
      <ArkRadioGroup.Label className="text-sm font-medium text-foreground">{label}</ArkRadioGroup.Label>
      {options.map((option) => (
        <ArkRadioGroup.Item
          key={option.value}
          value={option.value}
          className="inline-flex items-center gap-2 text-sm text-foreground"
        >
          <ArkRadioGroup.ItemControl className="h-4 w-4 rounded-full border border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary" />
          <ArkRadioGroup.ItemText>{option.label}</ArkRadioGroup.ItemText>
          <ArkRadioGroup.ItemHiddenInput />
        </ArkRadioGroup.Item>
      ))}
    </ArkRadioGroup.Root>
  );
}
