//INITIAL CSS
import '@/styles/globals.before.scss';
//PACKAGES
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-modal/styles.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
//LAST CSS
import '@/styles/globals.after.scss';
//----------------------------------------------------------------------------------------------------------------------
import AuthProvider from '@/providers/AuthProvider';
import GlobalSWRConfig from '@/config/GlobalSWRConfig';
import Head from 'next/head';
import Navigation from '@/components/Navigation/Navigation';
import ThemeProvider from '@/providers/ThemeProvider';
import icons from '@/data/icons';
import type {AppProps} from 'next/app';
import {SWRConfig} from 'swr';
import {SkeletonTheme} from 'react-loading-skeleton';
import {ToastContainer} from 'react-toastify';
import {library, config} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
library.add(...icons);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>SanderCokart.com</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            </Head>
            <SWRConfig value={GlobalSWRConfig}>
                <SkeletonTheme baseColor="var(--bg)" borderRadius="0" highlightColor="var(--acc)">
                    <AuthProvider>
                        <ThemeProvider>
                            <Navigation/>
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </AuthProvider>
                </SkeletonTheme>
                <ToastContainer autoClose={false}/>
            </SWRConfig>
        </>
    );
}

export default MyApp;
