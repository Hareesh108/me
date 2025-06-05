"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const FullScreen = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        className,
        "w-full min-h-[calc(100dvh-100px)] flex items-center justify-center overflow-x-hidden"
      )}
    >
      {children}
    </div>
  )
}
