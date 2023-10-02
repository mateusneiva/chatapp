"use client";

import React, { ButtonHTMLAttributes } from "react";
import { useTheme } from "next-themes";
import { DropdownMenu } from "@radix-ui/themes";
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi";

import { Button } from "./Button";

interface ToggleThemeMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonVariant?: "default" | "ghost" | "outline";
}

export function ToggleThemeMenu({ buttonVariant = "ghost", className }: ToggleThemeMenuProps) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant={buttonVariant} className={className} size="sm">
          <FiSun
            size={22}
            className="rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
          />
          <FiMoon
            size={22}
            className="absolute rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
          />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50 min-w-[8rem] text-sm shadow-md bg-white border border-gray-200 rounded-md p-1 dark:bg-slate-900 dark:border-slate-700 animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
        <DropdownMenu.Item
          onClick={() => setTheme("light")}
          className="select-none px-2.5 py-1.5 outline-none transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="flex items-center gap-2">
            <FiSun size={16} /> Light
          </span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => setTheme("dark")}
          className="select-none px-2.5 py-1.5 outline-none transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="flex items-center gap-2">
            <FiMoon size={16} /> Dark
          </span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => setTheme("system")}
          className="select-none px-2.5 py-1.5 outline-none transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="flex items-center gap-2">
            <FiMonitor size={16} />
            System
          </span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
