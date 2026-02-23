"use client";

import { useState } from "react";

export default function Footer() {
  const [theme, setTheme] = useState("system");

  const changeTheme = (selected) => {
    setTheme(selected);
    localStorage.setItem("theme", selected);

    if (selected === "dark") {
      document.documentElement.classList.add("dark");
    } else if (selected === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  };

  const base =
    "p-2 rounded-md transition hover:bg-neutral-100 dark:hover:bg-neutral-800";
  const active = "bg-neutral-200 dark:bg-neutral-700";

  return (
    <div className="mt-24 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <p>Built with Motion-Primitives.</p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => changeTheme("light")}
            className={`${base} ${theme === "light" ? active : ""}`}
          >
            ☀️
          </button>

          <button
            onClick={() => changeTheme("dark")}
            className={`${base} ${theme === "dark" ? active : ""}`}
          >
            🌙
          </button>

          <button
            onClick={() => changeTheme("system")}
            className={`${base} ${theme === "system" ? active : ""}`}
          >
            🖥
          </button>
        </div>
      </div>
    </div>
  );
}
