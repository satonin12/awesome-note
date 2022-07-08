import '../styles/globals.css'
import type {AppProps} from 'next/app'
import GetDataLayout from '../src/layout/GetDataLayout/GetDataLayout';
import PageDefaultLayout from '../src/layout/PageDefaultLayout/PageDefaultLayout';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<GetDataLayout>
			<PageDefaultLayout>
				<Component {...pageProps} />
			</PageDefaultLayout>
		</GetDataLayout>
	)
}

export default MyApp
