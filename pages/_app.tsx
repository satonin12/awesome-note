import '../styles/globals.css'
import type {AppProps} from 'next/app'
import GetDataLayout from '../src/layout/GetDataLayout/GetDataLayout';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<GetDataLayout>
			<Component {...pageProps} />
		</GetDataLayout>
	)
}

export default MyApp
