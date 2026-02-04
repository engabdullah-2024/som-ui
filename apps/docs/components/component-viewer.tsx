"use client";

import * as React from "react";
import { cn } from "somali-ui";
import { CodeBlock } from "@/components/code-block";
import { CommandCopy } from "@/components/command-copy";

interface ComponentViewerProps {
    title: string;
    description?: string;
    importCode: string; // The usage example
    installCommand?: string; // e.g. "npm install somali-ui"
    children: React.ReactNode; // The actual component preview
}

export function ComponentViewer({
    title,
    description,
    importCode,
    installCommand = "npm install somali-ui",
    children,
}: ComponentViewerProps) {
    const [activeTab, setActiveTab] = React.useState<"preview" | "code">("preview");

    return (
        <div className="group scroll-m-20" id={title.toLowerCase()}>
            <div className="mb-4 flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                    {description && (
                        <p className="text-sm text-muted-foreground">{description}</p>
                    )}
                </div>
            </div>

            <div className="space-y-4">
                {/* Tabs style switcher */}
                <div className="flex items-center gap-2 border-b pb-2">
                    <button
                        onClick={() => setActiveTab("preview")}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            activeTab === "preview" ? "text-primary border-b-2 border-primary -mb-[9px] pb-2" : "text-muted-foreground"
                        )}
                    >
                        Preview
                    </button>
                    <button
                        onClick={() => setActiveTab("code")}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            activeTab === "code" ? "text-primary border-b-2 border-primary -mb-[9px] pb-2" : "text-muted-foreground"
                        )}
                    >
                        Code
                    </button>
                </div>

                {activeTab === "preview" ? (
                    <div className="relative flex min-h-[350px] w-full items-center justify-center rounded-xl border bg-background/50 p-10 backdrop-blur ring-offset-background transition-all">
                        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
                        {children}
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                        <div className="space-y-2">
                            <h3 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Installation</h3>
                            <CommandCopy command={installCommand} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Usage</h3>
                            <CodeBlock code={importCode} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
