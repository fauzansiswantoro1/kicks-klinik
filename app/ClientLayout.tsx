"use client"

import type React from "react"
import dynamic from "next/dynamic"
import Footer from "@/components/footer"

const Header = dynamic(() => import("@/components/header"), { ssr: false })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
