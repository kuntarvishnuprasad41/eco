"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse border-none"
    >
      <Globe className="h-4 w-4 text-white" />
      <span className="text-white">
        {currentLocale === "en" ? "العربية" : "EN"}
      </span>
    </Button>
  );
}
