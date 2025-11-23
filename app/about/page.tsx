"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Heart, Zap, Shield, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-stone-50 flex flex-col">
            <Navbar />

            <main className="flex-1">

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight">
                            Nous démocratisons <br />
                            <span className="text-[#1A4D2E]">la seconde main professionnelle.</span>
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            Vintaid.ai est né d&apos;un constat simple : vendre ses vêtements prend trop de temps.
                            Nous utilisons l&apos;IA pour rendre la vente aussi simple que l&apos;achat.
                        </p>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-[#1A4D2E]" />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900">Vitesse Radicale</h3>
                                <p className="text-stone-600">
                                    Nous croyons que poster une annonce ne devrait pas prendre plus de 10 secondes. L&apos;automatisation est notre ADN.
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-blue-700" />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900">Qualité Pro</h3>
                                <p className="text-stone-600">
                                    Tout le monde mérite des photos dignes d&apos;un studio. Notre IA démocratise la direction artistique.
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900">Impact Réel</h3>
                                <p className="text-stone-600">
                                    Plus c&apos;est facile de vendre, moins on jette. Nous accélérons l&apos;économie circulaire par la technologie.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Team / Story */}
                <section className="py-20 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-[#1A4D2E] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

                            <div className="relative z-10 space-y-8">
                                <Users className="w-12 h-12 mx-auto text-emerald-300" />
                                <h2 className="text-3xl md:text-4xl font-bold">Rejoignez le mouvement</h2>
                                <p className="text-emerald-100 text-lg max-w-xl mx-auto">
                                    Nous sommes une petite équipe passionnée basée à Paris.
                                    Nous construisons le futur du e-commerce C2C.
                                </p>
                                <div className="pt-4">
                                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                                        📍 Paris, France
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
