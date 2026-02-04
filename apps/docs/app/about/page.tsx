
export default function AboutPage() {
    return (
        <div className="container max-w-3xl py-10 mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">About Somali UI</h1>
            <div className="prose dark:prose-invert">
                <p className="text-xl text-muted-foreground mb-8">
                    A design system built to empower the next generation of Somali developers.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Mission</h2>
                <p className="mb-4">
                    Somali UI was born from a desire to create a professional, production-ready component library
                    that reflects modern design trends while providing a robust foundation for building SaaS applications.
                </p>
                <p className="mb-4">
                    We believe that great software starts with great design systems. By providing a set of
                    high-quality, accessible, and customizable components, we hope to accelerate development
                    workflows and inspire creativity.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Tech Stack</h2>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li><strong>React 18+</strong>: The core library.</li>
                    <li><strong>Next.js 15</strong>: For the modern web.</li>
                    <li><strong>Tailwind CSS</strong>: For utility-first styling.</li>
                    <li><strong>Radix UI</strong>: For accessible primitives.</li>
                    <li><strong>TypeScript</strong>: For type safety.</li>
                </ul>
            </div>
        </div>
    );
}
