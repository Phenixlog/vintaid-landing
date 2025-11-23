import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CGU / CGV - Vintaid.ai",
    description: "Conditions Générales d'Utilisation et de Vente de Vintaid.ai",
};

export default function CGUCGV() {
    return (
        <>
            <h1>Conditions Générales d'Utilisation et de Vente (CGU/CGV)</h1>
            <p className="lead">Dernière mise à jour : 01/01/2025</p>

            <h2>1. Objet</h2>
            <p>Les présentes Conditions Générales ont pour objet de définir les modalités de mise à disposition des services du site Vintaid.ai, ci-après nommé « le Service » et les conditions d'utilisation du Service par l'Utilisateur.</p>

            <h2>2. Description du Service</h2>
            <p>Vintaid.ai est un service SaaS (Software as a Service) permettant aux utilisateurs d'optimiser leurs annonces de vente de vêtements en ligne grâce à l'intelligence artificielle (génération de descriptions, amélioration de photos, etc.).</p>

            <h2>3. Tarifs et Paiement</h2>
            <p>L'accès à certaines fonctionnalités du Service est payant. Les tarifs sont indiqués sur la page "Tarifs" du site et sont exprimés en euros TTC.</p>
            <ul>
                <li>Le paiement est exigible immédiatement à la commande.</li>
                <li>Le paiement s'effectue par carte bancaire via notre prestataire de paiement sécurisé (Stripe).</li>
                <li>L'abonnement est sans engagement et résiliable à tout moment depuis l'espace client.</li>
            </ul>

            <h2>4. Droit de rétractation</h2>
            <p>Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.</p>
            <p>En souscrivant au Service, l'Utilisateur accepte que la fourniture du contenu numérique commence immédiatement et renonce expressément à son droit de rétractation.</p>

            <h2>5. Responsabilité</h2>
            <p>Vintaid.ai s'efforce de fournir un service de qualité mais ne saurait être tenu responsable des interruptions de service, des erreurs dans les descriptions générées par l'IA, ou des conséquences liées à l'utilisation des annonces sur les plateformes tierces (Vinted, etc.).</p>

            <h2>6. Propriété intellectuelle</h2>
            <p>Tous les éléments du site Vintaid.ai sont et restent la propriété intellectuelle et exclusive de la société éditrice. Nul n'est autorisé à reproduire, exploiter, rediffuser, ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site.</p>

            <h2>7. Données personnelles</h2>
            <p>La protection de vos données est notre priorité. Consultez notre <a href="/legal/confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a> pour en savoir plus.</p>

            <h2>8. Droit applicable</h2>
            <p>Les présentes conditions sont soumises au droit français.</p>
        </>
    );
}
