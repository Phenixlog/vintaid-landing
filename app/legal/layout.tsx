import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-24 md:py-32 max-w-4xl">
                <div className="prose prose-stone lg:prose-lg max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
