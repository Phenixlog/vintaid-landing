"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const ARTICLES = [
    {
        id: 1,
        title: "Comment vendre 3x plus vite sur Vinted en 2025",
        excerpt: "Les algorithmes ont changé. Voici les nouvelles règles pour faire remonter vos annonces en tête de liste sans payer de boost.",
        category: "Guide Vente",
        date: "22 Nov 2025",
        readTime: "5 min",
        image: "bg-emerald-100",
        featured: true
    },
    {
        id: 2,
        title: "L'art de la photo à plat : Tutoriel complet",
        excerpt: "Pas besoin de mannequin. Apprenez à disposer vos vêtements pour un rendu professionnel qui attire l'œil.",
        category: "Photographie",
        date: "18 Nov 2025",
        readTime: "8 min",
        image: "bg-stone-200",
        featured: false
    },
    {
        id: 3,
        title: "Psychologie des prix : 19.99€ ou 20€ ?",
        excerpt: "Une étude sur 10 000 ventes révèle les stratégies de prix qui déclenchent l'achat impulsif.",
        category: "Marketing",
        date: "15 Nov 2025",
        readTime: "4 min",
        image: "bg-orange-100",
        featured: false
    },
    {
        id: 4,
        title: "Les marques qui se revendent le mieux cet hiver",
        excerpt: "Analyse des tendances de recherche. Ne manquez pas ces opportunités d'achat-revente.",
        category: "Tendances",
        date: "10 Nov 2025",
        readTime: "6 min",
        image: "bg-blue-100",
        featured: false
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-stone-50 flex flex-col">
            <Navbar />

            <main className="flex-1 pt-24 pb-24">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Header */}
                    <div className="max-w-2xl mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
                            Le Blog <span className="text-[#1A4D2E]">Vintaid.</span>
                        </h1>
                        <p className="text-lg text-stone-600">
                            Conseils d'experts, analyses de marché et tutoriels pour devenir un top vendeur.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ARTICLES.map((article) => (
                            <Link
                                key={article.id}
                                href="#"
                                className={`group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${article.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                            >
                                {/* Image Placeholder */}
                                <div className={`w-full ${article.featured ? 'h-64 md:h-80' : 'h-48'} ${article.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-stone-800">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs text-stone-400 mb-3 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <h2 className={`font-bold text-stone-900 mb-3 group-hover:text-[#1A4D2E] transition-colors ${article.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                                        {article.title}
                                    </h2>

                                    <p className="text-stone-600 leading-relaxed mb-6 flex-1">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center text-[#1A4D2E] font-semibold text-sm mt-auto">
                                        Lire l'article
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
