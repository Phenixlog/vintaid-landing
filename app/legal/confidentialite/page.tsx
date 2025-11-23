import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité - Vintaid.ai",
    description: "Politique de confidentialité et protection des données de Vintaid.ai",
};

export default function Confidentialite() {
    return (
        <>
            <h1>Politique de Confidentialité</h1>
            <p className="lead">Dernière mise à jour : 01/01/2025</p>

            <p>Chez Vintaid.ai, nous accordons une importance capitale à la confidentialité de vos données. Cette politique détaille les données que nous collectons et l'usage que nous en faisons.</p>

            <h2>1. Données collectées</h2>
            <p>Nous collectons les données suivantes pour le bon fonctionnement du service :</p>
            <ul>
                <li><strong>Données de compte :</strong> Email, Nom (pour l'inscription et la connexion).</li>
                <li><strong>Données d'utilisation :</strong> Photos de vêtements téléchargées (pour le traitement IA).</li>
                <li><strong>Données de paiement :</strong> Gérées intégralement par notre prestataire Stripe (nous ne stockons pas vos numéros de carte).</li>
                <li><strong>Données techniques :</strong> Adresse IP, type de navigateur (pour la sécurité et les analytics).</li>
            </ul>

            <h2>2. Utilisation des données</h2>
            <p>Vos données sont utilisées uniquement pour :</p>
            <ul>
                <li>Fournir le service (générer les annonces, améliorer les photos).</li>
                <li>Gérer votre abonnement et la facturation.</li>
                <li>Améliorer nos algorithmes d'IA (les photos peuvent être utilisées de manière anonymisée pour l'entraînement, sauf opposition de votre part).</li>
                <li>Vous contacter (support, mises à jour importantes).</li>
            </ul>

            <h2>3. Partage des données</h2>
            <p>Nous ne vendons jamais vos données personnelles. Elles peuvent être partagées avec nos sous-traitants techniques (hébergement, paiement, emailing) dans la stricte limite nécessaire à l'exécution du service.</p>

            <h2>4. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données.</p>
            <p>Pour exercer ces droits, contactez-nous à : <strong>privacy@vintaid.ai</strong></p>

            <h2>5. Sécurité</h2>
            <p>Nous mettons en œuvre toutes les mesures techniques nécessaires pour sécuriser vos données (chiffrement HTTPS, bases de données sécurisées).</p>
        </>
    );
}
