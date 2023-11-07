import { SvgProps } from "../types";

export const Phone = ({ size = 16, color = "currentColor" }: SvgProps) => {
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
        d="M21,16.5a1.11,1.11,0,0,1,0,.19l-.84,3.66a.9.9,0,0,1-.83.65h0A16.31,16.31,0,0,1,3,4.69H3a.88.88,0,0,1,.65-.82L7.31,3,7.5,3a.93.93,0,0,1,.78.51L10,7.45a.75.75,0,0,1,.07.33.91.91,0,0,1-.31.65L7.59,10.18a15.2,15.2,0,0,0,6.23,6.23l1.74-2.13a.94.94,0,0,1,.66-.31,1,1,0,0,1,.33.06l3.94,1.69A.93.93,0,0,1,21,16.5Z"
        fill={color}
      />
    </svg>
  );
};
