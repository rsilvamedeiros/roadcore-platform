import type { SVGProps } from "react";

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function MarketplaceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4 8h16l-1.5 10.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 8Z" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
    </Icon>
  );
}

export function FreightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M3 16V7a1 1 0 0 1 1-1h9v10" />
      <path d="M13 10h4l3 3v3a1 1 0 0 1-1 1h-1" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </Icon>
  );
}

export function FleetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M14.7 6.3a1 1 0 0 0-1.4 0l-1 1a3 3 0 0 1-4.2 0L6.7 6a1 1 0 0 0-1.4 1.4l1.3 1.4a3 3 0 0 1 0 4.2l-1.3 1.3a1 1 0 1 0 1.4 1.4l1.4-1.3a3 3 0 0 1 4.2 0l1.3 1.3a1 1 0 0 0 1.4-1.4l-1.3-1.3a3 3 0 0 1 0-4.2l1.3-1.4a1 1 0 0 0 0-1.4Z" />
      <circle cx="12" cy="12" r="1.5" />
    </Icon>
  );
}

export function ErpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </Icon>
  );
}
