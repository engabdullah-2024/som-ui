"use client";

import { CommandCopy } from "@/components/command-copy";

export default function ThemingPage() {
    return (
        <div className="container max-w-4xl py-10 mx-auto px-4">
            <div className="space-y-4 mb-10">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Theming
                </h1>
                <p className="text-xl text-muted-foreground">
                    Somali UI is built on Tailwind CSS, allowing you to completely customize the look and feel of your application.
                </p>
            </div>

            <div className="space-y-12">
                {/* CSS Variables Section */}
                <section className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        CSS Variables
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Somali UI uses CSS variables (custom properties) for all design tokens. This makes customizable themes and dark mode easy to implement.
                    </p>
                    <p className="leading-7">
                        These variables are defined in your <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">globals.css</code> file.
                    </p>

                    <div className="rounded-xl border bg-card text-card-foreground shadow">
                        <div className="p-6 pt-0 mt-6">
                            <h3 className="text-lg font-semibold mb-4">Core Colors</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Primary */}
                                <div className="flex items-center justify-between rounded-md border p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 rounded-full bg-primary border shadow-sm" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">Primary</span>
                                            <span className="text-xs text-muted-foreground">--primary</span>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground">205 100% 40%</div>
                                </div>
                                {/* Secondary */}
                                <div className="flex items-center justify-between rounded-md border p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 rounded-full bg-secondary border shadow-sm" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">Secondary</span>
                                            <span className="text-xs text-muted-foreground">--secondary</span>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground">210 40% 96.1%</div>
                                </div>
                                {/* Accent */}
                                <div className="flex items-center justify-between rounded-md border p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 rounded-full bg-accent border shadow-sm" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">Accent</span>
                                            <span className="text-xs text-muted-foreground">--accent</span>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground">25 63% 81%</div>
                                </div>
                                {/* Destructive */}
                                <div className="flex items-center justify-between rounded-md border p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 rounded-full bg-destructive border shadow-sm" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">Destructive</span>
                                            <span className="text-xs text-muted-foreground">--destructive</span>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground">0 84.2% 60.2%</div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold mt-8 mb-4">Functional Colors</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Background */}
                                <div className="flex items-center justify-between rounded-md border p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 rounded-full bg-background border shadow-sm" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">Background</span>
                                            <span className="text-xs text-muted-foreground">--background</span>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground">0 0% 100%</div>
                                </div>
                                {/* Muted */}
                                <div className="flex items-center justify-between rounded-md border p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 rounded-full bg-muted border shadow-sm" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">Muted</span>
                                            <span className="text-xs text-muted-foreground">--muted</span>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground"> 210 40% 96.1%</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Customization Section */}
                <section className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Customizing Colors
                    </h2>
                    <p className="leading-7">
                        To customize the theme, simply update the HSL values in your <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">globals.css</code> file.
                        We use HSL (Hue, Saturation, Lightness) values to ensure perfect compatibility with Tailwind's opacity modifiers.
                    </p>

                    <div className="rounded-lg border bg-zinc-950 p-4 overflow-x-auto">
                        <pre className="text-sm text-zinc-50 font-mono">
                            <code>{`:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}`}</code>
                        </pre>
                    </div>
                    <p className="leading-7">
                        You can create your own color palette using any HSL color picker. Just make sure to define the foreground color (text color) for each new color variable you add.
                    </p>
                </section>

                {/* Dark Mode Section */}
                <section className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Dark Mode
                    </h2>
                    <p className="leading-7">
                        Somali UI supports dark mode out of the box using the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">.dark</code> class.
                        When this class is applied to the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">html</code> element, the dark theme variables will automatically take effect.
                    </p>
                    <p className="leading-7">
                        We recommend using <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">next-themes</code> for the best dark mode experience in Next.js.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Installation</h3>
                    <CommandCopy command="npm install next-themes" />
                </section>

            </div>
        </div>
    );
}
