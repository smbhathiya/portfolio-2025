"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

export function NavBar() {
  const pathname = usePathname()
  
  return (
    <div className="flex items-center justify-center w-full py-4 px-6 md:px-8 border-b">
      <div className="flex items-center justify-center w-full max-w-4xl">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 md:gap-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  "px-3 py-2 hover:text-primary transition-colors",
                  pathname === "/" ? "font-medium text-primary" : "text-muted-foreground"
                )}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  "px-3 py-2 hover:text-primary transition-colors",
                  pathname === "/projects" ? "font-medium text-primary" : "text-muted-foreground"
                )}
              >
                <Link href="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  "px-3 py-2 hover:text-primary transition-colors",
                  pathname === "/about" ? "font-medium text-primary" : "text-muted-foreground"
                )}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  "px-3 py-2 hover:text-primary transition-colors",
                  pathname === "/contact" ? "font-medium text-primary" : "text-muted-foreground"
                )}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
