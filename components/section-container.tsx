import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function SectionContainer({ children, className, as: Component = "section" }: SectionContainerProps) {
  return (
    <Component className={cn("w-full", className)}>
      <div className="container mx-auto">{children}</div>
    </Component>
  )
}
