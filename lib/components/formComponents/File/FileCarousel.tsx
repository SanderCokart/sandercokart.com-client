import useImage from '@/hooks/useImage';
import styles from '@/styles/components/formComponents/File/FileContainer.module.scss';
import type {FileProps} from '@/types/FormControlTypes';
import {Banner} from '@/types/ModelTypes';
import type {FC} from 'react';
import {useFormContext} from 'react-hook-form';
import FileItem from './FileItem';
import type {ApiFileType} from './index';


const FileCarousel: FC<FileProps> = (props) => {
    const { name } = props;
    const { watch } = useFormContext();
    const files: File[] & Partial<ApiFileType[]> = watch(name, []) ?? [];

    return (
        <div className={styles.filesContainer}>
            {!!files.length && [...files]?.map((file, index) => {
                return <FileItem {...props} key={index} file={file} index={index}/>;
            })}
        </div>
    );
};

export default FileCarousel;