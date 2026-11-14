"use client";

import { usePathname } from "next/navigation";

export function HideOnPaths({
  paths,
  children,
}: {
  paths: string[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return paths.includes(pathname) ? null : children;
}
