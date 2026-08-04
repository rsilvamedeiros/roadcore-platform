export default function SuperadminLayout({ children }: LayoutProps<"/superadmin">) {
  return <div className="flex min-h-full flex-col">{children}</div>;
}
