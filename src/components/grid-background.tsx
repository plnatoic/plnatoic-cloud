"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full",
        className
      )}
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]",
        )}
      />
    </div>
  );
}
