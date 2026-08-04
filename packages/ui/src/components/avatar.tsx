"use client";

import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";

export interface AvatarProps {
  src?: string;
  alt: string;
  fallback: string;
}

export function Avatar({ src, alt, fallback }: AvatarProps) {
  return (
    <ArkAvatar.Root className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-secondary text-secondary-foreground">
      <ArkAvatar.Fallback className="text-sm font-medium">{fallback}</ArkAvatar.Fallback>
      {src ? <ArkAvatar.Image className="h-full w-full object-cover" src={src} alt={alt} /> : null}
    </ArkAvatar.Root>
  );
}
