"use client";

import * as React from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "somali-ui";
import { Button } from "somali-ui";

interface CommandCopyProps {
    command: string;
    className?: string;
}

export function CommandCopy({ command, className }: CommandCopyProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    const copyToClipboard = React.useCallback(() => {
        navigator.clipboard.writeText(command);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    }, [command]);

    return (
        <div
            className={cn(
                "relative flex items-center justify-between rounded-lg bg-zinc-950 px-4 py-3 font-mono text-sm text-zinc-50 border",
                className
            )}
        >
            <div className="flex items-center gap-2 overflow-x-auto">
                <Terminal className="h-4 w-4 text-zinc-400 shrink-0" />
                <span className="whitespace-nowrap">{command}</span>
            </div>
            <Button
                size="icon"
                variant="ghost"
                className="ml-2 h-6 w-6 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50"
                onClick={copyToClipboard}
            >
                {hasCopied ? (
                    <Check className="h-3 w-3" />
                ) : (
                    <Copy className="h-3 w-3" />
                )}
                <span className="sr-only">Copy</span>
            </Button>
        </div>
    );
}
