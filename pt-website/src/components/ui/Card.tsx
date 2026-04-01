import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-gray-100 p-6 shadow-sm",
        hover && "transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
