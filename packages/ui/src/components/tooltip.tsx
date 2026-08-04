"use client";

import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";
import type { ReactNode } from "react";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <ArkTooltip.Root>
      <ArkTooltip.Trigger className="inline-flex">{children}</ArkTooltip.Trigger>
      <ArkTooltip.Positioner>
        <ArkTooltip.Content className="rounded-md bg-foreground px-2 py-1 text-xs text-background shadow-md">
          {content}
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </ArkTooltip.Root>
  );
}
