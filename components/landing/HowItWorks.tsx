"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, Banknote } from "lucide-react";

const STEPS = [
    {
        id: 1,
        title: "Capturez",
        description: "Une simple photo suffit. L'IA s'occupe du cadrage et de la lumière.",
        icon: Camera,
        color: "bg-blue-50 text-blue-600",
        delay: 0.2,
    },
    {
        id: 2,
        title: "L'IA Analyse",
        description: "Détection automatique de la marque, taille et état. Description SEO rédigée.",
        icon: Sparkles,
        color: "bg-purple-50 text-purple-600",
        delay: 0.4,
    },
    {
        id: 3,
        title: "Vendez",
        description: "Copiez l'annonce prête à l'emploi. Vendez au meilleur prix estimé.",
        icon: Banknote,
        color: "bg-emerald-50 text-emerald-600",
        delay: 0.6,
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-12 md:py-24 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1A4D2E] px-4 py-8 md:px-12 md:py-20 shadow-2xl">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 relative z-10">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Vendre n&apos;a jamais été aussi simple
                        </h2>
                        <p className="text-lg text-stone-200">
                            Trois étapes. Vingt secondes. C&apos;est tout ce qu&apos;il faut.
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-3 gap-8 relative z-10">

                        {/* Connecting Line (Desktop only) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 -z-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>

                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="relative group"
                        >
                            <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Camera className="w-8 h-8 text-[#1A4D2E]" />
                                </div>
                                <div className="space-y-3">
                                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold mb-1 border border-white/20">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Photo à plat
                                    </h3>
                                    <p className="text-stone-200 leading-relaxed text-sm">
                                        Prenez une simple photo de votre vêtement posé sur un lit ou une table.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="relative group"
                        >
                            <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-full bg-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                                    <Sparkles className="w-8 h-8 text-[#1A4D2E]" />
                                </div>
                                <div className="space-y-3">
                                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold mb-1 border border-white/20">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Essayage IA
                                    </h3>
                                    <p className="text-stone-200 leading-relaxed text-sm">
                                        Notre IA génère une photo portée ultra-réaliste et rédige l&apos;annonce.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="relative group"
                        >
                            <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Banknote className="w-8 h-8 text-[#1A4D2E]" />
                                </div>
                                <div className="space-y-3">
                                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold mb-1 border border-white/20">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Vente Rapide
                                    </h3>
                                    <p className="text-stone-200 leading-relaxed text-sm">
                                        Copiez-collez sur Vinted. Vos articles se vendent 3x plus vite.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
