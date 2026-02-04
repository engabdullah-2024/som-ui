import Link from "next/link";
import { Button } from "somali-ui";
import { ArrowRight } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="container max-w-4xl py-10 mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground mb-10">
                Getting started with Somali UI in your Next.js project.
            </p>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Installation</h2>
                    <p className="mb-4 text-muted-foreground">
                        Install the package via your favorite package manager.
                    </p>
                    <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm">
                        npm install somali-ui
                    </div>
                    <div className="mt-2 bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm">
                        pnpm add somali-ui
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Configuration</h2>
                    <p className="mb-4 text-muted-foreground">
                        Wrap your application with the necessary providers and import the CSS.
                    </p>
                    <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre>{`// app/layout.tsx
import "somali-ui/dist/index.css";
// or if you are using the monorepo source
import "somali-ui/src/styles/globals.css"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}</pre>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
                    <div className="flex gap-4">
                        <Button asChild>
                            <Link href="/components">
                                Browse Components <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
