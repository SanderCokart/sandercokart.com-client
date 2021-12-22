import Navigation from '@/components/Navigation';
import GlobalSWRConfig from '@/config/GlobalSWRConfig';
import icons from '@/data/icons';
import AuthProvider from '@/providers/AuthProvider';
import '@/styles/globals.scss';
import {library} from '@fortawesome/fontawesome-svg-core';
import type {AppProps} from 'next/app';
import 'react-loading-skeleton/dist/skeleton.css';
import {SWRConfig} from 'swr';

library.add(...icons);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SWRConfig value={GlobalSWRConfig}>
                {/*<ApiProvider>*/}
                <AuthProvider>
                    {/*<LoadingProvider>*/}
                    <Navigation/>
                    <Component {...pageProps} />
                    {/*</LoadingProvider>*/}
                </AuthProvider>
                {/*</ApiProvider>*/}
            </SWRConfig>
        </>
    );
}

export default MyApp;
