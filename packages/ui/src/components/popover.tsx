"use client";

import { Popover as ArkPopover } from "@ark-ui/react/popover";
import type { ReactNode } from "react";

export interface PopoverProps {
  trigger: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
}

export function Popover({ trigger, title, children }: PopoverProps) {
  return (
    <ArkPopover.Root>
      <ArkPopover.Trigger className="inline-flex">{trigger}</ArkPopover.Trigger>
      <ArkPopover.Positioner>
        <ArkPopover.Content className="w-64 rounded-md border border-border bg-surface-elevated p-4 shadow-md">
          {title ? (
            <ArkPopover.Title className="text-sm font-semibold text-foreground">{title}</ArkPopover.Title>
          ) : null}
          <ArkPopover.Description className="mt-1 text-sm text-muted">{children}</ArkPopover.Description>
          <ArkPopover.CloseTrigger
            className="absolute right-2 top-2 text-muted hover:text-foreground"
            aria-label="Close"
          >
            ✕
          </ArkPopover.CloseTrigger>
        </ArkPopover.Content>
      </ArkPopover.Positioner>
    </ArkPopover.Root>
  );
}
