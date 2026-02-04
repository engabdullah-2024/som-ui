"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "somali-ui";

const items = [
    {
        title: "Getting Started",
        items: [
            {
                title: "Introduction",
                href: "/docs",
            },
            {
                title: "Installation",
                href: "/docs/installation",
            },
            {
                title: "Theming",
                href: "/docs/theming",
            },
        ],
    },
    {
        title: "Components",
        items: [
            { title: "Button", href: "/components#button" },
            { title: "Badge", href: "/components#badge" },
            { title: "Card", href: "/components#card" },
            { title: "Dialog", href: "/components#dialog" },
            { title: "Input", href: "/components#input" },
            { title: "Table", href: "/components#table" },
        ],
    },
];

export function DocsSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="pb-4">
                    <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                        {item.title}
                    </h4>
                    {item.items?.length && (
                        <div className="grid grid-flow-row auto-rows-max text-sm">
                            {item.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                                        pathname === item.href
                                            ? "font-medium text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
