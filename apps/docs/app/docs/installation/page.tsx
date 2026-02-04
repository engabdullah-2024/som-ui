"use client";

import { CommandCopy } from "@/components/command-copy";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import { Button } from "somali-ui";
import { ChevronRight } from "lucide-react";

export default function InstallationPage() {
    return (
        <div className="container max-w-4xl py-10 mx-auto px-4">
            <div className="space-y-4 mb-10">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Installation
                </h1>
                <p className="text-xl text-muted-foreground">
                    How to install dependencies and structure your app.
                </p>
            </div>

            <div className="space-y-12">
                {/* Step 1: Install */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted font-mono font-medium">1</span>
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Run the install command</h2>
                    </div>

                    <p className="leading-7 pl-12 text-muted-foreground">
                        Install the Somali UI package and its peer dependencies.
                    </p>

                    <div className="pl-12">
                        <div className="space-y-4">
                            <CommandCopy command="npm install somali-ui class-variance-authority clsx tailwind-merge lucide-react" />
                        </div>
                    </div>
                </div>

                {/* Step 2: Configure Tailwind */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted font-mono font-medium">2</span>
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configure Tailwind CSS</h2>
                    </div>

                    <p className="leading-7 pl-12 text-muted-foreground">
                        Update your <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">tailwind.config.js</code> file to include the Somali UI content path and preset.
                    </p>

                    <div className="pl-12">
                        <CodeBlock code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/somali-ui/dist/**/*.{js,ts,jsx,tsx}", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`} />
                    </div>
                </div>

                {/* Step 3: Global Styles */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted font-mono font-medium">3</span>
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Import Global Styles</h2>
                    </div>

                    <p className="leading-7 pl-12 text-muted-foreground">
                        Import the library's CSS in your root layout file (usually <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">app/layout.tsx</code>).
                    </p>

                    <div className="pl-12">
                        <CodeBlock code={`import "somali-ui/dist/index.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`} />
                    </div>
                </div>

                {/* Step 4: That's it */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted font-mono font-medium">4</span>
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">That's it!</h2>
                    </div>

                    <p className="leading-7 pl-12 text-muted-foreground">
                        You can now start using Somali UI components in your application.
                    </p>

                    <div className="pl-12 pt-4">
                        <div className="rounded-lg border bg-card p-6">
                            <h3 className="font-semibold mb-2">Try it out</h3>
                            <p className="text-sm text-muted-foreground mb-4">Add a button to your page to verify the installation.</p>
                            <CodeBlock code={`import { Button } from "somali-ui";

export default function Home() {
  return (
    <div>
      <Button>Hello World</Button>
    </div>
  )
}`} />
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="flex justify-end pt-8">
                    <Button asChild variant="outline" className="gap-2">
                        <Link href="/components">
                            Explore Components <ChevronRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

            </div>
        </div>
    );
}
