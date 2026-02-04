import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "somali-ui";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Somali UI",
    description: "A modern design system for React & Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
                <div className="relative flex min-h-screen flex-col">
                    <Navbar />
                    <div className="flex-1">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
