import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground shadow-[0_8px_20px_rgba(207,23,23,.2)] hover:bg-primary-600 hover:shadow-[0_10px_28px_rgba(207,23,23,.3)]",
  secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-black",
  danger: "bg-danger text-primary-foreground hover:bg-red-700",
};

export function buttonVariants(variant: ButtonVariant = "primary", className?: string) {
  return [
    "inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold",
    "transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={buttonVariants(variant, className)} {...props} />;
}
