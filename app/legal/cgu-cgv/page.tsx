import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CGU / CGV - Vintaid.ai",
    description: "Conditions Générales d'Utilisation et de Vente de Vintaid.ai",
};

export default function CGUCGV() {
    return (
        <>
            <h1>Conditions Générales d&apos;Utilisation et de Vente (CGU / CGV)</h1>
            <p className="lead">En vigueur au 01/01/2025</p>

            <h2>1. Objet</h2>
            <p>Les présentes CGU/CGV ont pour objet de définir les modalités de mise à disposition des services du site Vintaid.ai et les conditions d&apos;utilisation du Service par l&apos;Utilisateur.</p>

            <h2>2. Accès au service</h2>
            <p>Le Service est accessible gratuitement à tout Utilisateur disposant d&apos;un accès à internet. Tous les coûts afférents à l&apos;accès au Service, que ce soient les frais matériels, logiciels ou d&apos;accès à internet sont exclusivement à la charge de l&apos;utilisateur.</p>

            <h2>3. Propriété intellectuelle</h2>
            <p>Les marques, logos, signes ainsi que tout le contenu du site (textes, images, son...) font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d&apos;auteur.</p>

            <h2>4. Données personnelles</h2>
            <p>Les informations demandées à l&apos;inscription au site sont nécessaires et obligatoires pour la création du compte de l&apos;Utilisateur. En particulier, l&apos;adresse électronique pourra être utilisée par le site pour l&apos;administration, la gestion et l&apos;animation du service.</p>

            <h2>5. Responsabilité</h2>
            <p>Les sources des informations diffusées sur le site Vintaid.ai sont réputées fiables mais le site ne garantit pas qu&apos;il soit exempt de défauts, d&apos;erreurs ou d&apos;omissions.</p>

            <h2>6. Modification des CGU/CGV</h2>
            <p>Vintaid.ai se réserve le droit de modifier les clauses de ces conditions générales d&apos;utilisation et de vente à tout moment et sans justification.</p>

            <h2>7. Droit applicable et juridiction compétente</h2>
            <p>La législation française s&apos;applique au présent contrat. En cas d&apos;absence de résolution amiable d&apos;un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.</p>
        </>
    );
}
