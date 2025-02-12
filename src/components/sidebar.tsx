"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, DollarSign, Users, LogIn, LogOut } from "lucide-react"
import { Button } from "~/components/ui/button"
import { useState } from "react"

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "Manage Expenses", path: "/expenses", icon: DollarSign },
  { name: "Manage Beneficiaries", path: "/beneficiaries", icon: Users },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isSignedIn, setIsSignedIn] = useState(false) // This should be replaced with actual auth state

  return (
    <div className="flex h-full w-64 flex-col bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Hisaab Kitaab</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 ${
                  pathname === route.path ? "bg-gray-700" : ""
                }`}
              >
                <route.icon className="h-5 w-5" />
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <Button variant="outline" className="w-full" onClick={() => setIsSignedIn(!isSignedIn)}>
          {isSignedIn ? (
            <>
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </>
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

