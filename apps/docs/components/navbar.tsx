"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Menu, Command, X } from "lucide-react"

import { cn } from "somali-ui"
import { Button } from "somali-ui"

interface NavItem {
    label: string
    href: string
}

const NAV_ITEMS: NavItem[] = [
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/components" },
    { label: "About", href: "/about" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    const isActive = React.useCallback(
        (href: string) =>
            pathname ? pathname === href || pathname.startsWith(`${href}/`) : false,
        [pathname]
    )

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 max-w-screen-2xl items-center px-6">

                {/* LEFT: Logo */}
                <Logo />

                {/* CENTER: Desktop Nav */}
                <div className="hidden flex-1 justify-center md:flex">
                    <NavItems isActive={isActive} />
                </div>

                {/* RIGHT: Actions */}
                <div className="flex flex-1 items-center justify-end gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>

                    <Button variant="ghost" size="icon" asChild>
                        <Link
                            href="https://github.com/somali-ui/somali-ui"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                open={isOpen}
                onClose={() => setIsOpen(false)}
                isActive={isActive}
            />
        </header>
    )
}

/* -----------------------------
   Sub Components
--------------------------------*/

function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
        >
            <Command className="h-6 w-6 text-primary" />
            <span className="text-base">Somali UI</span>
        </Link>
    )
}

function NavItems({
    isActive,
    vertical = false,
    onNavigate,
}: {
    isActive: (href: string) => boolean
    vertical?: boolean
    onNavigate?: () => void
}) {
    return (
        <nav
            className={cn(
                "flex items-center gap-8 text-sm font-medium",
                vertical && "flex-col items-start gap-4"
            )}
        >
            {NAV_ITEMS.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                        "relative transition-colors hover:text-foreground",
                        isActive(item.href)
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

function MobileMenu({
    open,
    onClose,
    isActive,
}: {
    open: boolean
    onClose: () => void
    isActive: (href: string) => boolean
}) {
    if (!open) return null

    return (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl">
            <div className="container mx-auto px-6 py-6">
                <NavItems
                    isActive={isActive}
                    vertical
                    onNavigate={onClose}
                />
            </div>
        </div>
    )
}
