import { SvgProps } from "../types";

export const Facebook = ({ size = 16, color = "currentColor" }: SvgProps) => {
  return (
    <svg
      id="Camada_1"
      data-name="Camada 1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M10,21.5h3.49V13h2.71l.44-3.37H13.45V7.29a1.86,1.86,0,0,1,.29-1.19,1.72,1.72,0,0,1,1.37-.44H16.9v-3a18.8,18.8,0,0,0-2.6-.15,4.31,4.31,0,0,0-3.15,1.17A4.45,4.45,0,0,0,10,7V9.63H7.1V13H10Z"
        fill={color}
      />
    </svg>
  );
};
