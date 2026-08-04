"use client";

import { createListCollection, Select as ArkSelect } from "@ark-ui/react/select";
import type { ReactNode } from "react";
import { useMemo } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label: ReactNode;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  onValueChange?: (value: string | undefined) => void;
}

export function Select({
  label,
  options,
  value,
  defaultValue,
  placeholder,
  disabled,
  name,
  onValueChange,
}: SelectProps) {
  const collection = useMemo(() => createListCollection({ items: options }), [options]);

  return (
    <ArkSelect.Root
      collection={collection}
      value={value !== undefined ? [value] : undefined}
      defaultValue={defaultValue !== undefined ? [defaultValue] : undefined}
      disabled={disabled}
      name={name}
      onValueChange={(details) => onValueChange?.(details.value[0])}
      className="flex flex-col gap-1"
    >
      <ArkSelect.Label className="text-sm font-medium text-foreground">{label}</ArkSelect.Label>
      <ArkSelect.Control>
        <ArkSelect.Trigger className="flex w-full items-center justify-between rounded-md border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
          <ArkSelect.ValueText placeholder={placeholder} />
          <ArkSelect.Indicator className="text-muted">▾</ArkSelect.Indicator>
        </ArkSelect.Trigger>
      </ArkSelect.Control>
      <ArkSelect.Positioner>
        <ArkSelect.Content className="z-50 min-w-40 rounded-md border border-border bg-surface-elevated py-1 shadow-md">
          {collection.items.map((item) => (
            <ArkSelect.Item
              key={item.value}
              item={item}
              className="cursor-pointer px-3 py-2 text-sm text-foreground data-highlighted:bg-surface data-[state=checked]:font-medium"
            >
              <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
            </ArkSelect.Item>
          ))}
        </ArkSelect.Content>
      </ArkSelect.Positioner>
      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  );
}
