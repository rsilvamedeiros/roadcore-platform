export default function BackofficeLayout({ children }: LayoutProps<"/backoffice">) {
  return <div className="flex min-h-full flex-col">{children}</div>;
}
