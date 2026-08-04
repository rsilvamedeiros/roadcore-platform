export default function PortalLayout({ children }: LayoutProps<"/portal">) {
  return <div className="flex min-h-full flex-col">{children}</div>;
}
