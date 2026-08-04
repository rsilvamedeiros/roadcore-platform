"use client";

import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import type { ReactNode } from "react";

export interface CheckboxProps {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  name,
  onCheckedChange,
}: CheckboxProps) {
  return (
    <ArkCheckbox.Root
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      name={name}
      onCheckedChange={(details) => onCheckedChange?.(details.checked === true)}
      className="inline-flex items-center gap-2"
    >
      <ArkCheckbox.Control className="flex h-5 w-5 items-center justify-center rounded border border-border bg-surface-elevated text-primary-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary">
        <ArkCheckbox.Indicator className="text-xs leading-none">✓</ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.Label className="text-sm text-foreground">{label}</ArkCheckbox.Label>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
}
