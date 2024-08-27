"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import MountedSpinner from "@/components/UI/MountedSpinner";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const isActive = (currentTheme: string) => currentTheme === theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <MountedSpinner />;
  }

  return (
    <div className="flex justify-center rounded-md gap-2 p-1 w-fit border border-[#636167]">
      <button
        className={`p-1 rounded-full ${
          isActive("light") ? "bg-[#eeb551]" : "bg-transparent"
        }`}
        onClick={() => setTheme("light")}
      >
        <Image
          src="/ThemeSwitcher/sun.png"
          width={20}
          height={20}
          alt="sun icon"
        />
      </button>
      <button
        className={`p-1 rounded-full ${
          isActive("system") ? "bg-white/20" : "bg-transparent"
        }`}
        onClick={() => setTheme("system")}
      >
        <Image
          src="/ThemeSwitcher/home.png"
          width={20}
          height={20}
          alt="home icon"
        />
      </button>
      <button
        className={`p-1 rounded-full ${
          isActive("dark") ? "bg-white/20" : "bg-transparent"
        }`}
        onClick={() => setTheme("dark")}
      >
        <Image
          src="/ThemeSwitcher/moon.png"
          width={20}
          height={20}
          alt="moon icon"
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
