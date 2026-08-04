"use client";

import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import type { ReactNode } from "react";

export interface SwitchProps {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  name,
  onCheckedChange,
}: SwitchProps) {
  return (
    <ArkSwitch.Root
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      name={name}
      onCheckedChange={(details) => onCheckedChange?.(details.checked)}
      className="inline-flex items-center gap-2"
    >
      <ArkSwitch.Control className="relative h-6 w-10 rounded-full bg-border transition-colors data-[state=checked]:bg-primary">
        <ArkSwitch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-surface-elevated transition-transform data-[state=checked]:translate-x-[18px]" />
      </ArkSwitch.Control>
      <ArkSwitch.Label className="text-sm text-foreground">{label}</ArkSwitch.Label>
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  );
}
