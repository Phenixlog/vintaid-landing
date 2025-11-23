import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique des Cookies - Vintaid.ai",
    description: "Cette politique explique comment nous utilisons les cookies et technologies similaires sur Vintaid.ai.",
};

export default function Cookies() {
    return (
        <>
            <h1>Politique des Cookies</h1>
            <p className="lead">Dernière mise à jour : 01/01/2025</p>

            <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p>Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Il permet de mémoriser vos actions et préférences (connexion, langue, etc.) sur une certaine durée.</p>

            <h2>2. Les cookies que nous utilisons</h2>
            <h3>Cookies strictement nécessaires</h3>
            <p>Ces cookies sont indispensables au bon fonctionnement du site (connexion, panier, sécurité). Ils ne peuvent pas être désactivés.</p>

            <h3>Cookies de mesure d&apos;audience (Analytics)</h3>
            <p>Nous utilisons des outils (ex: Google Analytics, Plausible) pour comprendre comment les visiteurs utilisent notre site afin de l&apos;améliorer. Ces données sont anonymisées.</p>

            <h3>Cookies marketing</h3>
            <p>Ces cookies peuvent être utilisés pour vous proposer des publicités pertinentes sur d&apos;autres sites (ex: Pixel Facebook). Vous pouvez refuser ces cookies.</p>

            <h2>3. Gestion de vos préférences</h2>
            <p>Vous pouvez à tout moment paramétrer vos préférences en matière de cookies via les réglages de votre navigateur ou via notre bannière de consentement.</p>
        </>
    );
}
