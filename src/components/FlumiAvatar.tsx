import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import polisbuddyAvatar from "@/assets/flumi-avatar-transparent.png";

interface PolissBuddyAvatarProps {
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

const PolissBuddyAvatar = ({
  size = "md",
  className,
  variant = "default",
  showFallback = true
}: PolissBuddyAvatarProps) => {
  const avatarClasses = cn("flex items-center justify-center transition-all duration-300", {
    "rounded-full overflow-hidden bg-gradient-primary shadow-colored hover:shadow-colored-hover hover:scale-105": variant === "default",
    "rounded-full overflow-hidden bg-gradient-primary shadow-colored": variant === "chat",
    "hover:scale-105 hover:drop-shadow-lg": variant === "hero"
  }, sizeClasses[size], className);
  
  return (
    <div className={avatarClasses}>
      <img 
        src={polisbuddyAvatar} 
        alt="PolissBuddy Avatar"
        className="w-full h-full object-cover"
      />
      {showFallback && (
        <div className="flex items-center justify-center w-full h-full bg-gradient-primary text-white font-semibold">
          <Shield className="w-1/2 h-1/2" />
        </div>
      )}
    </div>
  );
};

export default PolissBuddyAvatar;