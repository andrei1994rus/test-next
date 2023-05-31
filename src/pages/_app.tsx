import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import {Roboto} from 'next/font/google';

const roboto = Roboto({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500'],
});

const NavigationBar = dynamic(() => import('@/components/navigationBar'));

export default function App({Component, pageProps}: AppProps) {
	return (
		<div className={roboto.className}>
			<NavigationBar />
			<Component {...pageProps} />
		</div>
	);
}
