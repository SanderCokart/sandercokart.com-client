import styles from '@/styles/pages/blog/Recent.module.scss';
import {BlogProps} from '@/types/PropTypes';
import {PostsResponse} from '@/types/ResponseTypes';
import axios from 'axios';
import type {GetStaticProps} from 'next';
import Image from 'next/image';
import type {FC} from 'react';
import {useState} from 'react';
import RecentPostLayout from '../../lib/layouts/pages/blog/RecentPostLayout';
import {useApi} from '../../lib/providers/ApiProvider';

export const Blog: FC<BlogProps> = (props) => {
    const api = useApi();

    const [state, setState] = useState({ ...props.initialData });
    const [loading, setLoading] = useState(false);

    const getMorePosts = async () => {
        if (!!state.links.next && !loading)
            try {
                await setLoading(true);
                const { data }: PostsResponse = await api.get(state.links.next, { params: { cursor: state.meta.cursor } });
                await setState(prev => ({ ...data, posts: [...prev.posts, ...data.posts] }));
                await setLoading(false);
            } catch (err) {
                console.error(err);
            }
    };

    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <Image alt="banner" layout="fill" objectFit="cover" objectPosition="80% 20%"
                       src="/assets/images/banner-compressed.jpg"/>
            </div>

            <div className={styles.posts}>
                {state.posts.map(post => (
                    <RecentPostLayout key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
};

export default Blog;


export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data: initialData } = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/posts?perPage=5');

        return {
            props: { initialData }
        };
    } catch (err) {
        throw Error(err);
    }
};