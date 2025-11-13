import { type SVGProps } from "react";

export function BarsIcon(props: SVGProps<SVGSVGElement>) {
  return <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
  </svg>
}