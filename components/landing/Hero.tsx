"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Play, Star, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-200 via-stone-50 to-stone-50 pt-20 md:pt-0">

            {/* Animated Background Blobs - High Visibility */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] bg-emerald-500/30 rounded-full blur-[80px] pointer-events-none z-0"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-500/30 rounded-full blur-[80px] pointer-events-none z-0"
            />

            <div className="container mx-auto px-4 md:px-6 h-full relative z-10">
                <div className="grid h-full gap-12 lg:grid-cols-2 lg:gap-8 items-center py-8 md:py-24">

                    {/* LEFT COLUMN: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col justify-center space-y-8 -mt-12 lg:-mt-20"
                    >
                        {/* Badge */}
                        <div className="inline-flex w-fit items-center rounded-full border border-stone-200 bg-white/50 px-3 py-1 text-xs font-medium text-stone-600 backdrop-blur-sm">
                            🚀 Bientôt disponible sur iOS & Android
                        </div>

                        {/* Headlines */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl xl:text-6xl/none">
                                Vos vêtements portés. <br />
                                <span className="text-primary underline decoration-primary/30 underline-offset-8">
                                    Sans les porter.
                                </span>
                            </h1>
                            <p className="max-w-[600px] text-lg text-stone-600 md:text-xl leading-relaxed">
                                Transformez une simple photo à plat en une photo portée ultra-réaliste. Vendez 3x plus vite. L'IA génère aussi votre titre et description.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="rounded-full gap-2 text-base h-12 px-8 shadow-lg shadow-primary/20">
                                    <Sparkles className="h-4 w-4" />
                                    Essayer sur une photo
                                    <ArrowRight className="h-4 w-4 ml-1 opacity-50" />
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full gap-2 text-base h-12 px-8 border-stone-300 hover:bg-stone-100">
                                    <Play className="h-4 w-4 fill-current" />
                                    Voir la démo
                                </Button>
                            </div>
                            <p className="text-sm text-stone-500 font-medium ml-2">
                                Pas de carte bancaire requise • 5 essais offerts
                            </p>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center overflow-hidden">
                                        <div className={`w-full h-full bg-stone-300`} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-0.5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-xs font-medium text-stone-500">
                                    Utilisé par 500+ vendeurs
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Interactive Before/After Slider */}
                    <div className="flex items-center justify-center lg:justify-end relative">
                        {/* Abstract Background Blob (Static behind slider) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

                        <BeforeAfterSlider
                            beforeImage="/images/hero-raw.jpg"
                            afterImage="/images/hero-processed.jpg"
                            beforeLabel="📸 Photo à plat"
                            afterLabel="✨ Rendu IA Porté"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
