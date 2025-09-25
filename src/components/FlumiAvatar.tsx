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
  return (
    <div className={avatarClasses}>
      <img 
        src={flumiAvatar} 
        alt="Flumi - AI Cybersecurity Assistant" 
        className="w-full h-full object-cover"
        onError={(e) => {
          if (showFallback) {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-3/4 h-3/4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>';
          }
        }}
      />
    </div>
  );
};
export default FlumiAvatar;