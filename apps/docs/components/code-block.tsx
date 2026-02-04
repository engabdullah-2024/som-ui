"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "somali-ui";
import { Button } from "somali-ui";

interface CodeBlockProps {
    code: string;
    className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    const copyToClipboard = React.useCallback(() => {
        navigator.clipboard.writeText(code);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    }, [code]);

    return (
        <div className={cn("relative overflow-hidden rounded-lg border bg-zinc-950 text-zinc-50", className)}>
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">
                <span className="text-xs font-medium text-zinc-400">tsx</span>
                <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50"
                    onClick={copyToClipboard}
                >
                    {hasCopied ? (
                        <Check className="h-3 w-3" />
                    ) : (
                        <Copy className="h-3 w-3" />
                    )}
                    <span className="sr-only">Copy code</span>
                </Button>
            </div>
            <div className="overflow-x-auto p-4">
                <pre className="font-mono text-sm leading-relaxed">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
