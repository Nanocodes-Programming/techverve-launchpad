import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToHeroForm(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const formElement = document.getElementById("hero-form");
  const firstInput = formElement?.querySelector<HTMLInputElement>('input[name="full_name"]');
  
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    
    // Focus first input after scroll completes
    setTimeout(() => {
      firstInput?.focus();
    }, 500);
  }
  
  // Update hash without triggering navigation
  window.history.pushState(null, "", "#hero-form");
}
