import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import flumiAvatar from "@/assets/flumi-avatar-transparent.png";
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
  const avatarClasses = cn("flex items-center justify-center transition-all duration-300", {
    "rounded-full overflow-hidden bg-gradient-primary shadow-colored hover:shadow-colored-hover hover:scale-105": variant === "default",
    "rounded-full overflow-hidden bg-gradient-primary shadow-colored": variant === "chat",
    "hover:scale-105 hover:drop-shadow-lg": variant === "hero"
  }, sizeClasses[size], className);
  return (
    <div className={avatarClasses}>
      <img 
        src={flumiAvatar} 
        alt="Flumi AI Assistant" 
        className="w-full h-full object-cover"
        onError={(e) => {
          if (showFallback) {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }
        }}
      />
      {showFallback && (
        <Shield className={cn("hidden text-white", {
          "w-4 h-4": size === "sm",
          "w-6 h-6": size === "md", 
          "w-8 h-8": size === "lg",
          "w-12 h-12": size === "xl"
        })} />
      )}
    </div>
  );
};
export default FlumiAvatar;