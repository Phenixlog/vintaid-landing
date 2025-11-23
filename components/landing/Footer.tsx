import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-8 md:py-16 border-t border-stone-800">
            <div className="container mx-auto px-4 md:px-6">

                {/* Top Section: Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Brand */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#1A4D2E] flex items-center justify-center">
                                <span className="text-white font-bold text-lg">V</span>
                            </div>
                            <span className="text-xl font-bold text-white">Vintaid.ai</span>
                        </div>
                        <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
                            L&apos;intelligence artificielle qui transforme vos vêtements en ventes. Photos pro, descriptions optimisées, ventes accélérées.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <Link href="#" className="hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Product */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold">Produit</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/#features" className="hover:text-white transition-colors">Fonctionnalités</Link>
                            </li>
                            <li>
                                <Link href="/#pricing" className="hover:text-white transition-colors">Tarifs</Link>
                            </li>
                            <li>
                                <Link href="/#how-it-works" className="hover:text-white transition-colors">Comment ça marche</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold">Entreprise</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">À propos</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/coming-soon" className="hover:text-white transition-colors">Carrières</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold">Légal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/legal/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
                            </li>
                            <li>
                                <Link href="/legal/cgu-cgv" className="hover:text-white transition-colors">CGU / CGV</Link>
                            </li>
                            <li>
                                <Link href="/legal/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
                            </li>
                            <li>
                                <Link href="/legal/cookies" className="hover:text-white transition-colors">Cookies</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section: Copyright */}
                <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
                    <p>
                        © 2025 Vintaid.ai. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-1">
                        <span>Fait avec</span>
                        <Heart className="w-3 h-3 text-red-500 fill-current" />
                        <span>à Paris</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
