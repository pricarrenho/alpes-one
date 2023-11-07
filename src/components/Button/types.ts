export type ButtonProps = {
  children?: string | number;
  icon?: "phone" | "whatsapp" | "tour";
  styleType: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: React.ElementType;
};
