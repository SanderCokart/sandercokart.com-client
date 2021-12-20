import {SWRConfiguration} from 'swr';
import axios from '../functions/shared/axios';

export default {
    fetcher: (url: string) => axios.get(url).then(response => response.data),
    revalidateOnFocus: false
} as SWRConfiguration;