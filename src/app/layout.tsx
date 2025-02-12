import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "~/styles/globals.css"
import { Sidebar } from "~/components/sidebar"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hisaab Kitaab",
  description: "Manage and track your daily finances",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}

