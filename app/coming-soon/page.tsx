import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 px-4 text-center">
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
                <Construction className="w-12 h-12 text-[#1A4D2E]" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Bientôt disponible
            </h1>

            <p className="text-stone-600 max-w-md mb-8">
                Nous travaillons dur pour vous apporter cette fonctionnalité.
                Revenez très bientôt !
            </p>

            <Link href="/">
                <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Retour à l&apos;accueil
                </Button>
            </Link>
        </div>
    );
}
