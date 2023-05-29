import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';

const NavigationBar = dynamic(() => import('@/components/navigationBar'));

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<NavigationBar />
			<Component {...pageProps} />
		</>
	);
}
