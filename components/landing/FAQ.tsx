"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        question: "Est-ce que c'est compatible avec l'app Vinted ?",
        answer: "Oui, à 100%. Vintaid agit comme un assistant. Vous générez le contenu chez nous, puis vous le copiez-collez dans l'app Vinted en un clic. Aucun risque de blocage.",
    },
    {
        question: "L'essai gratuit est-il vraiment gratuit ?",
        answer: "Absolument. Vous avez 5 crédits offerts à l'inscription pour tester toutes les fonctionnalités (détourage, IA, SEO). Aucune carte bancaire requise.",
    },
    {
        question: "Mes données sont-elles sécurisées ?",
        answer: "Vos photos et données restent privées. Nous ne les revendons jamais. Nous les utilisons uniquement pour générer votre annonce.",
    },
    {
        question: "Puis-je modifier l'annonce générée ?",
        answer: "Bien sûr. L'IA vous donne une base parfaite (Titre, Desc, Prix), mais vous gardez la main totale pour ajuster le texte avant de publier.",
    },
];

export function FAQ() {
    return (
        <section className="py-12 md:py-24 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                        Questions Fréquentes
                    </h2>
                    <p className="text-lg text-stone-600">
                        Tout ce que vous devez savoir avant de commencer.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-2xl mx-auto space-y-4">
                    {FAQS.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={cn(
                "bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
                isOpen ? "border-primary/50 shadow-md" : "border-stone-200 hover:border-stone-300"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className={cn(
                    "text-lg font-semibold transition-colors",
                    isOpen ? "text-primary" : "text-stone-900"
                )}>
                    {question}
                </span>
                <div className={cn(
                    "p-2 rounded-full transition-colors",
                    isOpen ? "bg-primary/10 text-primary" : "bg-stone-100 text-stone-500"
                )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
