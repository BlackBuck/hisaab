"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, DollarSign, Users, LogIn, LogOut, Factory } from "lucide-react"
import { Button } from "~/components/ui/button"
import { useState } from "react"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "Manage Expenses", path: "/expenses", icon: DollarSign },
  { name: "Manage Beneficiaries", path: "/beneficiaries", icon: Users },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isSignedIn, setIsSignedIn] = useState(false) // Replace with actual auth state

  return (
    <>
      {/* Top Navbar for Mobile */}
      {/* <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between z-50">
        <h1 className="text-xl font-bold">Hisaab Kitaab</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div> */}

      {/* Sidebar (For Desktop) & Mobile Dropdown Navbar */}
      <div
        className={`fixed p-2 content-start text-left left-0 top-0 flex w-full flex-row bg-gray-800 text-white transition-transform md:relative md:top-0 md:flex md:h-full md:w-64 md:flex-col`}
      >
        <div className="md:m-2 md:flex md:flex-row md:gap-2 justify-center align-middle hidden md:visible">
          <span className="text-2xl font-mono invisible md:visible">Hisaab Kitaab</span>
          {/* <span className="text-2xl font-mono md:invisible">HK</span> */}
        </div>
        <nav className="flex-1 align-middle">
          <ul className="flex flex-row justify-center gap-2 text-center align-middle md:flex-col">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={`p-2 rounded-md gap-2 flex flex-row text-center align-middle items-center h-full md:items-start md:w-full hover:bg-gray-700 ${
                    pathname === route.path ? "bg-gray-800" : "bg-gray-900"
                  }`}
                >
                  <route.icon className="" />
                  <span className="invisible md:visible">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
}
