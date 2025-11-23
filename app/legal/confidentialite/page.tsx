import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité - Vintaid.ai",
    description: "Cette Politique de Confidentialité décrit comment Vintaid.ai (ci-après \"nous\", \"notre\") collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site et nos services.",
};

export default function Confidentialite() {
    return (
        <>
            <h1>Politique de Confidentialité</h1>
            <p className="lead">Dernière mise à jour : 01/01/2025</p>

            <p>Chez Vintaid.ai, nous accordons une importance capitale à la confidentialité de vos données. Nous collectons les informations que vous nous fournissez directement (nom, email, photos de vêtements) ainsi que des données d&apos;utilisation collectées automatiquement (cookies, adresse IP).</p>

            <h2>1. Données collectées</h2>
            <p>Nous collectons les données suivantes pour le bon fonctionnement du service :</p>
            <ul>
                <li><strong>Données de compte :</strong> Email, Nom (pour l&apos;inscription et la connexion).</li>
                <li><strong>Données d&apos;utilisation :</strong> Les photos que vous téléchargez sont traitées par notre IA pour générer les résultats, puis stockées temporairement conformément à votre niveau d&apos;abonnement.</li>
                <li><strong>Données de paiement :</strong> Gérées intégralement par notre prestataire Stripe (nous ne stockons pas vos numéros de carte).</li>
                <li><strong>Données techniques :</strong> Adresse IP, type de navigateur (pour la sécurité et les analytics).</li>
            </ul>

            <h2>2. Utilisation des données</h2>
            <p>Vos données sont utilisées uniquement pour :</p>
            <ul>
                <li>Fournir le service (générer les annonces, améliorer les photos).</li>
                <li>Gérer votre abonnement et la facturation.</li>
                <li>Améliorer nos algorithmes d&apos;IA (les photos peuvent être utilisées de manière anonymisée pour l&apos;entraînement, sauf opposition de votre part).</li>
                <li>Vous contacter (support, mises à jour importantes).</li>
            </ul>

            <h2>3. Partage des données</h2>
            <p>Nous ne vendons pas vos données personnelles. Nous pouvons les partager avec des prestataires tiers de confiance (hébergement, paiement) uniquement pour la bonne exécution du service.</p>

            <h2>4. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données.</p>
            <p>Pour exercer ces droits ou pour toute question, contactez notre DPO à : <strong>dpo@vintaid.ai</strong> ou par courrier à l&apos;adresse de notre siège social.</p>

            <h2>5. Sécurité</h2>
            <p>Nous mettons en œuvre toutes les mesures techniques nécessaires pour sécuriser vos données (chiffrement HTTPS, bases de données sécurisées).</p>
        </>
    );
}
