"use client";

import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import type { ReactNode } from "react";

export interface TabItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({ items, value, defaultValue, onValueChange }: TabsProps) {
  return (
    <ArkTabs.Root
      value={value}
      defaultValue={defaultValue ?? items[0]?.value}
      onValueChange={(details) => onValueChange?.(details.value)}
    >
      <ArkTabs.List className="flex gap-1 border-b border-border">
        {items.map((item) => (
          <ArkTabs.Trigger
            key={item.value}
            value={item.value}
            className="px-3 py-2 text-sm text-muted data-[selected]:font-medium data-[selected]:text-foreground"
          >
            {item.label}
          </ArkTabs.Trigger>
        ))}
        <ArkTabs.Indicator className="h-0.5 bg-primary" />
      </ArkTabs.List>
      {items.map((item) => (
        <ArkTabs.Content key={item.value} value={item.value} className="pt-4">
          {item.content}
        </ArkTabs.Content>
      ))}
    </ArkTabs.Root>
  );
}
