"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1A4D2E] px-6 py-20 text-center shadow-2xl sm:px-16">

                    {/* Background Pattern/Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 max-w-3xl mx-auto space-y-8"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                            Ne perdez plus 15 minutes par annonce.
                        </h2>

                        <p className="text-lg text-stone-200 md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Rejoignez les 500+ vendeurs qui utilisent Vintaid pour vendre plus vite et plus cher.
                        </p>

                        <div className="flex flex-col items-center gap-4 pt-4">
                            <a href="https://vintaid.lovable.app/">
                                <Button
                                    size="lg"
                                    className="h-14 rounded-full bg-white text-[#1A4D2E] hover:bg-stone-100 px-8 text-lg font-bold shadow-lg transition-transform hover:scale-105"
                                >
                                    Commencer gratuitement
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>

                            <p className="text-sm text-stone-300 font-medium">
                                Pas de carte bancaire requise • 5 crédits offerts
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
