"use client";

import { motion } from "framer-motion";
import { Tag, TrendingUp, Search, Wand2, ScanLine, Shirt, Sparkles, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function Features() {
    return (
        <section id="features" className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                        Vos vêtements portés par des mannequins. <br />
                        <span className="text-stone-500">Sans mannequin.</span>
                    </h2>
                    <p className="text-lg text-stone-600">
                        Transformez une simple photo à plat en un shooting professionnel. Vintaid s&apos;occupe aussi du reste.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

                    {/* HERO CARD: Essayage Virtuel IA (Full Width) */}
                    <FeatureCard
                        className="md:col-span-3 min-h-[300px] md:min-h-[500px]"
                        title="Essayage Virtuel IA"
                        description="Ne vendez plus des vêtements posés sur un lit. Notre IA génère une photo portée ultra-réaliste qui multiplie vos chances de vente par 3."
                        delay={0.05}
                    >
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pt-24 md:pt-32">
                            <div className="relative w-full h-full max-w-4xl flex items-center justify-center gap-8 p-8 opacity-90">

                                {/* Before: Flat Lay */}
                                <div className="relative w-48 h-64 md:w-64 md:h-80 bg-white rounded-xl shadow-lg rotate-[-6deg] border border-stone-100 p-2 z-10">
                                    <div className="absolute -top-3 -left-3 bg-stone-900 text-white text-xs font-bold px-2 py-1 rounded">
                                        VOTRE PHOTO
                                    </div>
                                    <div className="w-full h-full bg-stone-100 rounded-lg flex items-center justify-center overflow-hidden">
                                        <Shirt className="w-24 h-24 text-stone-300" />
                                    </div>
                                </div>

                                {/* Arrow Animation */}
                                <motion.div
                                    animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="z-20 text-primary"
                                >
                                    <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
                                </motion.div>

                                {/* After: Worn on Model */}
                                <div className="relative w-48 h-64 md:w-64 md:h-80 bg-white rounded-xl shadow-2xl rotate-[6deg] border-4 border-white z-10 overflow-hidden">
                                    <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-20">
                                        RÉSULTAT VINTAID
                                    </div>
                                    <div className="w-full h-full bg-stone-200 relative">
                                        {/* Abstract Model Representation */}
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-multiply" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
                                    </div>
                                </div>

                                {/* Background Glow Effect */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full -z-10" />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 1: Fiche Complète (1 col) */}
                    <FeatureCard
                        className="md:col-span-1"
                        title="Description Magique"
                        description="Titre, description, marque, matière... L'IA rédige tout pour vous en 2 secondes."
                        delay={0.1}
                    >
                        <div className="mt-6 flex justify-end">
                            <div className="p-3 bg-stone-100 rounded-xl">
                                <FileText className="w-8 h-8 text-stone-600" />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 2: Prix Stratégique (1 col) */}
                    <FeatureCard
                        className="md:col-span-1"
                        title="Prix Stratégique"
                        description="Vendez au meilleur prix grâce à l'analyse du marché en temps réel."
                        delay={0.15}
                    >
                        <div className="mt-6 flex justify-end">
                            <div className="p-3 bg-green-100 rounded-xl">
                                <TrendingUp className="w-8 h-8 text-green-600" />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 3: Studio Photo (1 col) */}
                    <FeatureCard
                        className="md:col-span-1"
                        title="Qualité Studio"
                        description="Lumière corrigée, fond nettoyé. Vos articles sortent du lot."
                        delay={0.2}
                    >
                        <div className="mt-6 flex justify-end">
                            <div className="p-3 bg-stone-100 rounded-xl">
                                <Wand2 className="w-8 h-8 text-stone-600" />
                            </div>
                        </div>
                    </FeatureCard>

                </div>
            </div>
        </section>
    );
}

function FeatureCard({ children, className, title, description, delay }: { children?: React.ReactNode, className?: string, title: string, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={cn(
                "group relative bg-white rounded-2xl border border-stone-200 p-8 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between",
                className
            )}
        >
            <div className="relative z-10 max-w-[80%] md:max-w-[60%]">
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </div>

            {children}
        </motion.div>
    );
}
