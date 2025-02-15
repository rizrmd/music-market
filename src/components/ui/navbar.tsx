"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <div className="flex h-[100px] items-center px-[50px] relative">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/img/logo.svg"
              alt="Sample Stash Logo"
              height={40}
              width={200}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-1 items-center space-x-4 justify-end md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image 
              src="/img/burger.svg" 
              alt="Menu" 
              width={24} 
              height={24} 
              className="h-6 w-6" 
            />
          </Button>

          <div className="pl-2">
            <div className="h-[27px] border-l border-l-[#3E3E3E]"></div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-white transition-colors hover:text-white/70"
            asChild
          >
            <Link href="/">
              <Image 
                src="/img/cart.svg" 
                alt="Shopping Cart" 
                width={24} 
                height={24} 
                className="h-6 w-6" 
              />
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-2 md:ml-[50px]">
          <Search className="mr-2 h-4 w-4 text-white" />
          {[
            { href: "/", label: "Explore", active: true },
            { href: "/", label: "Samples" },
            { href: "/", label: "Kits" },
          ].map((item, idx) => (
            <Button
              key={idx}
              variant="link"
              className={cn(
                "text-sm font-medium text-white/70 transition-colors hover:text-white",
                item.active && "text-white"
              )}
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex ml-auto items-center space-x-4">
          <Button
            variant="ghost"
            className="text-sm font-medium text-white transition-colors hover:text-white/70"
            asChild
          >
            <Link href="/">Login</Link>
          </Button>
          <Button className="text-sm font-medium" asChild>
            <Link href="/">Signup</Link>
          </Button>
          <div className="pl-2">
            <div className="h-[27px] border-l border-l-[#3E3E3E]"></div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white transition-colors hover:text-white/70"
            asChild
          >
            <Link href="/">
              <Image 
                src="/img/cart.svg" 
                alt="Shopping Cart" 
                width={20} 
                height={20} 
                className="h-5 w-5" 
              />
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-black border-t border-[#3E3E3E] md:hidden",
            isOpen ? "block" : "hidden"
          )}
        >
          <div className="px-4 py-2">
            <div className="flex flex-col space-y-2">
              {[
                { href: "/", label: "Explore", active: true },
                { href: "/", label: "Samples" },
                { href: "/", label: "Kits" },
              ].map((item, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className={cn(
                    "justify-start text-sm font-medium text-white/70 transition-colors hover:text-white",
                    item.active && "text-white"
                  )}
                  asChild
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
              <div className="border-t border-[#3E3E3E] my-2"></div>
              <Button
                variant="ghost"
                className="justify-start text-sm font-medium text-white transition-colors hover:text-white/70"
                asChild
              >
                <Link href="/">Login</Link>
              </Button>
              <Button className="justify-start text-sm font-medium" asChild>
                <Link href="/">Signup</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
