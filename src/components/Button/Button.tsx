import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost";

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & ({ to: string; href?: never } | { href: string; to?: never });

export function ButtonLink(props: ButtonLinkProps) {
  const { variant = "primary", className, children } = props;
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }
  const isExternal = /^https?:\/\//i.test(props.href);
  return (
    <a
      href={props.href}
      className={classes}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
