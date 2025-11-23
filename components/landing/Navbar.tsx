"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-stone-200/50 bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300">
                <div className="px-6">
                    <div className="flex h-14 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-1">
                            <span className="text-xl font-bold text-stone-900 tracking-tight">
                                Vintaid.ai
                            </span>
                            <span className="h-2 w-2 rounded-full bg-primary mb-1" />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="#features"
                                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                            >
                                Fonctionnalités
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                            >
                                Tarifs
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                            >
                                Comment ça marche
                            </Link>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="https://vintaid.lovable.app/">
                                <Button variant="ghost" className="text-stone-600 hover:text-stone-900 h-9 rounded-full px-4">
                                    Se connecter
                                </Button>
                            </Link>
                            <Link href="https://vintaid.lovable.app/">
                                <Button className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-sm h-9 px-6">
                                    Scanner un article
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-stone-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-4 right-4 z-40 rounded-2xl border border-stone-200 bg-white shadow-xl p-4 md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            <Link
                                href="#features"
                                className="text-sm font-medium text-stone-600 p-3 rounded-xl hover:bg-stone-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Fonctionnalités
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-sm font-medium text-stone-600 p-3 rounded-xl hover:bg-stone-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Tarifs
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="text-sm font-medium text-stone-600 p-3 rounded-xl hover:bg-stone-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Comment ça marche
                            </Link>
                            <div className="h-px bg-stone-100 my-2" />
                            <Link href="https://vintaid.lovable.app/">
                                <Button variant="ghost" className="w-full justify-start rounded-xl">
                                    Se connecter
                                </Button>
                            </Link>
                            <Link href="https://vintaid.lovable.app/">
                                <Button className="w-full rounded-xl">Scanner un article</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
