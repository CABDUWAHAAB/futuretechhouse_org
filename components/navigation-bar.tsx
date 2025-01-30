"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { ChevronRight, Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg`}
              alt="Ironhack Logo"
              width={32}
              height={32}
            />
            <span className="font-bold">ironhack</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="#" className="group block space-y-1">
                        <div className="font-medium">Web Development</div>
                        <div className="text-sm text-muted-foreground">Learn to code</div>
                      </Link>
                      <Link href="#" className="group block space-y-1">
                        <div className="font-medium">UX/UI Design</div>
                        <div className="text-sm text-muted-foreground">Design digital products</div>
                      </Link>
                      <Link href="#" className="group block space-y-1">
                        <div className="font-medium">Data Analytics</div>
                        <div className="text-sm text-muted-foreground">Work with data</div>
                      </Link>
                      <Link href="#" className="group block space-y-1">
                        <div className="font-medium">Cybersecurity</div>
                        <div className="text-sm text-muted-foreground">Protect digital assets</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Why Ironhack?
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Financing Options
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Free Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Log in</Button>
          <Button>Apply Now</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full p-0 bg-[#3749E9] text-white">
            <SheetHeader className="p-6 text-left border-b border-white/10">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg`}
                    alt="Ironhack Logo"
                    width={32}
                    height={32}
                  />
                  <span className="font-bold">ironhack</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-white/80"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </SheetHeader>
            <div className="py-6 px-6 flex-grow">
              <nav className="space-y-6">
                <Link
                  href="#"
                  className="flex items-center justify-between text-lg hover:text-white/80"
                  onClick={() => setOpen(false)}
                >
                  Courses
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-lg hover:text-white/80"
                  onClick={() => setOpen(false)}
                >
                  Why Ironhack?
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-lg hover:text-white/80"
                  onClick={() => setOpen(false)}
                >
                  Financing Options
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-lg hover:text-white/80"
                  onClick={() => setOpen(false)}
                >
                  Free Resources
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-lg hover:text-white/80"
                  onClick={() => setOpen(false)}
                >
                  Webinars
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-lg hover:text-white/80"
                  onClick={() => setOpen(false)}
                >
                  Blog
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-lg hover:text-white/80"
                  onClick={() => setOpen(false)}
                >
                  Enterprise
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

