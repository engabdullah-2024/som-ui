"use client";

import { Inter } from "next/font/google";
import { Button, cn } from "somali-ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    // Log the error
    if (error) {
        console.error(error);
    }
    return (
        <html lang="en">
            <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
                <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center p-4">
                    <h1 className="text-4xl font-bold">Critical System Error</h1>
                    <p className="text-muted-foreground">
                        The application encountered a critical error and cannot recover.
                    </p>
                    <Button onClick={() => reset()} size="lg">
                        Try again
                    </Button>
                </div>
            </body>
        </html>
    );
}
