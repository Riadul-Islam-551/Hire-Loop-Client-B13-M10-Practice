"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {Sun} from '@gravity-ui/icons';
import {Moon} from '@gravity-ui/icons';

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors border "
    >
      {theme === "dark" ? <Sun className="text-yellow-400 "/> : <Moon />}
    </button>
  );
}
