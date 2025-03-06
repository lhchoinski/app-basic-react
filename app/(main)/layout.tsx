import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'LinkOnTech App Basic',
    description: 'Model for react developers.',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'LinkOnTech  App Basic',
        url: 'https://linkontech.com.br',
        description: 'Model for react developers..',
        ttl: 604800
    },
    icons: {
        icon: '/lampada-transparente.png'
    }
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
