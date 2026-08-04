import { BrandSymbol } from "@/components/brand-logo";
export function BrandMark({ className }: { className?: string }) { return <BrandSymbol className={`h-9 w-9 ${className ?? ""}`} />; }
