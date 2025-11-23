import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
    metadataBase: new URL('https://vintaid.ai'), // Replace with actual domain when deployed
    title: {
        default: "Vintaid.ai - Vendez 3x plus vite sur Vinted avec l'IA",
        template: "%s | Vintaid.ai"
    },
    description: "Transformez vos photos à plat en photos portées ultra-réalistes. Générez des descriptions optimisées SEO. Vendez vos vêtements en un temps record.",
    keywords: ["Vinted", "IA", "Vente vêtements", "Photo portée", "Description Vinted", "Optimisation Vinted", "Vintaid"],
    authors: [{ name: "Vintaid Team" }],
    creator: "Vintaid.ai",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://vintaid.ai",
        title: "Vintaid.ai - L'IA au service de vos ventes Vinted",
        description: "Ne perdez plus de temps à poser. Notre IA génère des photos portées et des descriptions vendeuses en 10 secondes.",
        siteName: "Vintaid.ai",
        images: [
            {
                url: "/og-image.jpg", // Needs to be added to public folder
                width: 1200,
                height: 630,
                alt: "Vintaid.ai Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vintaid.ai - Vendez mieux, vendez plus vite",
        description: "L'outil ultime pour les vendeurs Vinted. Photos portées par IA & descriptions auto.",
        images: ["/og-image.jpg"], // Needs to be added to public folder
        creator: "@vintaid_ai",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable
                )}
            >
                <GoogleAnalytics />
                {children}
            </body>
        </html>
    );
}
