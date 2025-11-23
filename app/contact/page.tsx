"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-stone-50 flex flex-col">
            <Navbar />

            <main className="flex-1 pt-24 pb-12">
                <div className="container mx-auto px-4 md:px-6">

                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

                        {/* Left Column: Info */}
                        <div className="space-y-8">
                            <div className="space-y-8">
                                <Mail className="w-5 h-5 text-[#1A4D2E]" />
                                <div>
                                    <h3 className="font-semibold text-stone-900">Email</h3>
                                    <p className="text-stone-500 text-sm mb-1">Notre équipe répond sous 24h.</p>
                                    <a href="mailto:contact@vintaid.ai" className="text-[#1A4D2E] font-medium hover:underline">contact@vintaid.ai</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-5 h-5 text-[#1A4D2E]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-stone-900">Chat Support</h3>
                                    <p className="text-stone-500 text-sm mb-1">Disponible pour les membres Pro.</p>
                                    <span className="text-stone-400 text-sm">Via votre tableau de bord</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstname" className="text-sm font-medium text-stone-700">Prénom</label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            className="flex h-10 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Jean"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastname" className="text-sm font-medium text-stone-700">Nom</label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            className="flex h-10 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Dupont"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-stone-700">Email professionnel</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="flex h-10 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="jean@exemple.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Comment pouvons-nous vous aider ?"
                                    />
                                </div>

                                <Button className="w-full bg-[#1A4D2E] hover:bg-[#143d24] text-white h-12 rounded-xl text-base">
                                    Envoyer le message
                                    <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
