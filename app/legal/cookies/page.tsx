import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique des Cookies - Vintaid.ai",
    description: "Gestion des cookies sur Vintaid.ai",
};

export default function Cookies() {
    return (
        <>
            <h1>Politique des Cookies</h1>
            <p className="lead">Dernière mise à jour : 01/01/2025</p>

            <h2>1. Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet de conserver des données utilisateur afin de faciliter la navigation et de permettre certaines fonctionnalités.</p>

            <h2>2. Les cookies que nous utilisons</h2>
            <h3>Cookies strictement nécessaires</h3>
            <p>Ces cookies sont indispensables au bon fonctionnement du site (connexion, panier, sécurité). Ils ne peuvent pas être désactivés.</p>

            <h3>Cookies de mesure d'audience (Analytics)</h3>
            <p>Nous utilisons des outils (ex: Google Analytics, Plausible) pour comprendre comment les visiteurs utilisent notre site afin de l'améliorer. Ces données sont anonymisées.</p>

            <h3>Cookies marketing</h3>
            <p>Ces cookies peuvent être utilisés pour vous proposer des publicités pertinentes sur d'autres sites (ex: Pixel Facebook). Vous pouvez refuser ces cookies.</p>

            <h2>3. Gestion de vos préférences</h2>
            <p>Vous pouvez à tout moment modifier vos préférences en matière de cookies via le bandeau de configuration accessible en bas de page ou via les paramètres de votre navigateur.</p>
        </>
    );
}
