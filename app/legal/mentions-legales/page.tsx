import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales - Vintaid.ai",
    description: "Mentions légales de Vintaid.ai",
};

export default function MentionsLegales() {
    return (
        <>
            <h1>Mentions Légales</h1>
            <p className="lead">En vigueur au 01/01/2025</p>

            <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs du site Vintaid.ai les présentes mentions légales.</p>

            <h2>1. Éditeur du site</h2>
            <p>Le site Vintaid.ai est édité par :</p>
            <ul>
                <li><strong>Dénomination sociale :</strong> [VOTRE SOCIÉTÉ] (ex: SAS VINTAID)</li>
                <li><strong>Siège social :</strong> [VOTRE ADRESSE]</li>
                <li><strong>SIRET :</strong> [VOTRE SIRET]</li>
                <li><strong>Capital social :</strong> [MONTANT] €</li>
                <li><strong>TVA Intracommunautaire :</strong> [VOTRE NUMÉRO TVA]</li>
                <li><strong>Directeur de la publication :</strong> [VOTRE NOM]</li>
                <li><strong>Email de contact :</strong> contact@vintaid.ai</li>
            </ul>

            <h2>2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul>
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</li>
                <li><strong>Site web :</strong> https://vercel.com</li>
            </ul>

            <h2>3. Accès au site</h2>
            <p>Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.</p>
            <p>En cas de modification, interruption ou suspension des services le site Vintaid.ai ne saurait être tenu responsable.</p>

            <h2>4. Collecte des données</h2>
            <p>Le site assure à l&apos;utilisateur une collecte et un traitement d&apos;informations personnelles dans le respect de la vie privée. Conformément à la loi &quot;Informatique et Libertés&quot; du 6 janvier 1978 modifiée et au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant.</p>
            <p>Pour plus d&apos;informations, référez-vous à notre <a href="/legal/confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.</p>
        </>
    );
}
