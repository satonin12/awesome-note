import '../styles/globals.css'
import {Provider} from 'react-redux'
import GetDataLayout from '../src/layout/GetDataLayout/GetDataLayout';
import {store, persistor} from '../src/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <GetDataLayout>
              <Component {...pageProps} />
            </GetDataLayout>
        </PersistGate>
      </Provider>
)
}

import type { AppProps } from 'next/app'
import {PersistGate} from 'redux-persist/integration/react';

export default MyApp
