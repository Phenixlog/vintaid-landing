import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Vintaid.ai',
        short_name: 'Vintaid',
        description: "L'IA qui booste vos ventes Vinted",
        start_url: '/',
        display: 'standalone',
        background_color: '#FAFAF9', // stone-50
        theme_color: '#1A4D2E', // Primary green
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
