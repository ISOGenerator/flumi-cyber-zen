import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import flumiAvatar from "@/assets/flumi-avatar.png";
interface FlumiAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "default" | "chat" | "hero";
  showFallback?: boolean;
}
const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24"
};
const FlumiAvatar = ({
  size = "md",
  className,
  variant = "default",
  showFallback = true
}: FlumiAvatarProps) => {
  const avatarClasses = cn("rounded-full flex items-center justify-center overflow-hidden transition-all duration-300", sizeClasses[size], {
    "bg-gradient-primary shadow-colored hover:shadow-colored-hover hover:scale-105": variant === "default",
    "bg-gradient-primary shadow-colored": variant === "chat",
    "bg-gradient-primary shadow-colored hover:scale-105 hover:shadow-colored-hover": variant === "hero"
  }, className);
  return;
};
export default FlumiAvatar;