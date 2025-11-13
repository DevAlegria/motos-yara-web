import { type IconName, icons } from "./icons";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

export function IconButton({ name, size = 20, className = "", ...props }: IconProps) {
  const Component = icons[name];
  if (!Component) return null;

  return (
    <Component
      width={size}
      height={size}
      className={`inline-block focus:bg-background-100 hover:bg-background-100 rounded ${className}`}
      {...props}
    />
  );
}