"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, DollarSign, Users, PowerCircleIcon } from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { useIsMobile } from "~/hooks/use-mobile"

const routes = [
  { name: "Home", path: "/dashboard", icon: Home },
  { name: "Manage Expenses", path: "/expenses", icon: DollarSign },
  { name: "Manage Beneficiaries", path: "/beneficiaries", icon: Users },
]

export function Sidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

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
        className={`sticky left-0 top-0 mb-1 flex w-full flex-row justify-between border border-b-neutral-50 md:border-r-neutral-50 p-2 text-left text-white md:relative md:top-0 md:flex md:h-full md:w-64 md:flex-col`}
      >
        <div>
          <div className="m-2">
            <span className={`${isMobile && "hidden"} font-mono text-2xl md:inline`}>
              Hisaab Kitaab
            </span>
          </div>
          {/* <span className="text-2xl font-mono md:invisible">HK</span> */}
          <nav className="align-middle">
            <ul className="flex flex-row justify-center gap-2 text-center align-middle md:flex-col">
              {routes.map((route) => (
                <li  className="items-center align-middle content-center" key={route.path}>
                  <Link
                    href={route.path}
                    className={`flex h-full flex-row items-center gap-2 rounded-md p-2 text-center align-middle hover:bg-neutral-700 md:w-full md:items-start ${
                      pathname === route.path
                        ? "bg-neutral-800"
                        : "bg-neutral-950"
                    }`}
                  >
                    <route.icon className="" />
                    <div className={`${isMobile && "hidden"}`}>{route.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <SignedOut>
            <div className="flex flex-row gap-1">
              <PowerCircleIcon className={`${isMobile && "hidden"}`} />
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex flex-row gap-1">
              <UserButton />
              <span className={`${isMobile && "hidden"} md:ml-2`}>Account</span>
            </div>
          </SignedIn>
        </div>
      </div>
    </>
  );
}
