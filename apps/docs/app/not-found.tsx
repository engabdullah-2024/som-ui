import Link from "next/link";
import { Button } from "somali-ui";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <FileQuestion className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">404</h2>
            <p className="text-xl font-semibold">Page Not Found</p>
            <p className="text-muted-foreground max-w-[500px] mb-6">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link href="/">
                <Button size="lg">Return Home</Button>
            </Link>
        </div>
    );
}
