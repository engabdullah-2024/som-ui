import Link from "next/link";
import { Button } from "somali-ui";
import { CheckCircle2, Github, LayoutDashboard, Zap } from "lucide-react";

export default function Home() {
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
                    <Link
                        href="https://twitter.com/somali_ui"
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted/80"
                        target="_blank"
                    >
                        Follow along on Twitter <span className="ml-1 text-primary">@somali_ui</span>
                    </Link>
                    <h1 className="font-heading text-3xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
                        Build beautiful interfaces with <span className="text-primary">Somali UI</span>
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        A modern, accessible, and fully typed design system inspired by Somali culture.
                        Beautifully designed components that you can copy and paste into your apps.
                    </p>
                    <div className="space-x-4">
                        <Button size="lg" className="h-11 px-8" asChild>
                            <Link href="/docs">
                                Get Started
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-11 px-8" asChild>
                            <Link href="https://github.com/somali-ui/somali-ui" target="_blank" rel="noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Features
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        This project is an experiment to see how a modern component library can be built
                        specifically for the Somali tech ecosystem.
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                                <Zap className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">Fast & Lightweight</h3>
                                <p className="text-sm text-muted-foreground">
                                    Optimized for speed and minimal bundle size. Tree-shakable imports.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">Accessible</h3>
                                <p className="text-sm text-muted-foreground">
                                    Built on Radix primitives for full WAI-ARIA compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                                <LayoutDashboard className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">Dashboard Ready</h3>
                                <p className="text-sm text-muted-foreground">
                                    Components designed specifically for modern SaaS dashboards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="open-source" className="container py-8 md:py-12 lg:py-24 mx-auto">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Proudly Open Source
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Somali UI is completely open source and free to use. <br />
                        Contributions are welcome!
                    </p>
                    <Button variant="secondary" size="lg" className="h-11 px-8" asChild>
                        <Link href="https://github.com/somali-ui/somali-ui" target="_blank" rel="noreferrer">
                            Star on GitHub
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
