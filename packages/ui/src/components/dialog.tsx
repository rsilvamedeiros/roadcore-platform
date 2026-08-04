"use client";

import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import type { ReactNode } from "react";

export interface DialogProps {
  trigger?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface DialogFrameProps extends DialogProps {
  positionerClassName: string;
  contentClassName: string;
}

function DialogFrame({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
  positionerClassName,
  contentClassName,
}: DialogFrameProps) {
  return (
    <ArkDialog.Root open={open} onOpenChange={(details) => onOpenChange?.(details.open)}>
      {trigger ? <ArkDialog.Trigger className="inline-flex">{trigger}</ArkDialog.Trigger> : null}
      <Portal>
        <ArkDialog.Backdrop className="fixed inset-0 bg-foreground/40" />
        <ArkDialog.Positioner className={positionerClassName}>
          <ArkDialog.Content className={contentClassName}>
            <ArkDialog.Title className="text-lg font-semibold text-foreground">{title}</ArkDialog.Title>
            {description ? (
              <ArkDialog.Description className="mt-1 text-sm text-muted">
                {description}
              </ArkDialog.Description>
            ) : null}
            <div className="mt-4">{children}</div>
            <ArkDialog.CloseTrigger
              className="absolute right-4 top-4 text-muted hover:text-foreground"
              aria-label="Close"
            >
              ✕
            </ArkDialog.CloseTrigger>
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </Portal>
    </ArkDialog.Root>
  );
}

export function Dialog(props: DialogProps) {
  return (
    <DialogFrame
      {...props}
      positionerClassName="fixed inset-0 flex items-center justify-center p-4"
      contentClassName="w-full max-w-md rounded-lg bg-surface-elevated p-6 shadow-lg"
    />
  );
}

export type DrawerProps = DialogProps;

export function Drawer(props: DrawerProps) {
  return (
    <DialogFrame
      {...props}
      positionerClassName="fixed inset-y-0 right-0 flex"
      contentClassName="flex h-full w-full max-w-sm flex-col bg-surface-elevated p-6 shadow-lg transition-transform data-[state=closed]:translate-x-full data-[state=open]:translate-x-0"
    />
  );
}
