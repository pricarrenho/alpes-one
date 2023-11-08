import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorType = AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  children?: string | number;
  icon?: "phone" | "whatsapp" | "tour";
  styleType: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: React.ElementType;
} & ButtonType &
  AnchorType;
