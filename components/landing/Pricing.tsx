"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
    {
        id: "discovery",
        name: "Découverte",
        price: "Gratuit",
        description: "Pour tester la puissance de l'IA.",
        features: ["5 annonces / mois", "Détection IA basique", "Support standard"],
        cta: "Commencer gratuitement",
        href: "https://vintaid.lovable.app/",
        popular: false,
        variant: "outline" as const,
    },
    {
        id: "pro",
        name: "Vendeur Pro",
        price: "9,99 €",
        period: "/ mois",
        description: "Pour ceux qui vident leur dressing régulièrement.",
        features: [
            "250 annonces / mois",
            "IA Premium (Description + SEO)",
            "Détourage photo auto",
            "Support prioritaire",
        ],
        cta: "Choisir le Pro",
        href: "https://vintaid.lovable.app/",
        popular: true,
        variant: "default" as const,
    },
    {
        id: "business",
        name: "Business",
        price: "29,99 €",
        period: "/ mois",
        description: "Pour les revendeurs et friperies.",
        features: [
            "Annonces illimitées",
            "Mode Bulk (Multi-upload)",
            "API Access",
            "Account Manager dédié",
        ],
        cta: "Contacter l'équipe",
        href: "mailto:contact@vintaid.ai",
        popular: false,
        variant: "outline" as const,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                        Rentabilisé dès la première vente.
                    </h2>
                    <p className="text-lg text-stone-600">
                        Choisissez le plan adapté à votre volume de vente. Annulez à tout moment.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {PLANS.map((plan, index) => (
                        <PricingCard key={plan.id} plan={plan} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function PricingCard({ plan, index }: { plan: typeof PLANS[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={cn(
                "relative flex flex-col p-8 rounded-2xl bg-white border transition-all duration-300",
                plan.popular
                    ? "border-primary shadow-2xl md:scale-105 z-10"
                    : "border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300"
            )}
        >
            {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Populaire
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-stone-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-stone-900">{plan.price}</span>
                    {plan.period && <span className="text-stone-500">{plan.period}</span>}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                    {plan.description}
                </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <a href={plan.href} className="w-full block">
                <Button
                    variant={plan.variant === "default" ? "default" : "outline"}
                    className={cn(
                        "w-full h-12 rounded-xl text-base font-semibold",
                        plan.variant === "default" ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" : "border-stone-200 hover:bg-stone-50"
                    )}
                >
                    {plan.cta}
                </Button>
            </a>
        </motion.div>
    );
}
