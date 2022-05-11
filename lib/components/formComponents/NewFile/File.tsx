import FileDropbox from '@/components/formComponents/NewFile/FileDropbox';
import FileCarousel from '@/components/formComponents/NewFile/FileCarousel';
import styles from './File.module.scss';
import {InputHTMLAttributes} from 'react';
import {useFormContext} from 'react-hook-form';
import {Button} from '@/components/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FileModel} from '@/types/ModelTypes';
import getDifference from '@/functions/shared/getDifference';
import axios from '@/functions/shared/axios';
import {ApiFilesRoute} from '@/constants/api-routes';

interface FileProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const File = (props: FileProps) => {
    const { watch, setValue, reset, getValues, control: { _defaultValues } } = useFormContext();
    const files = watch(props.name);

    const handleReset = async () => {
        const nonDefaultFiles = getDifference<FileModel>(getValues(props.name), _defaultValues[props.name]);
        for (const file of nonDefaultFiles) {
            await axios.simpleDelete(ApiFilesRoute(file.id));
        }
        reset();
    };

    return (
        <>
            <div className={styles.controls}>
                <Button onClick={() => setValue(props.name, [])}>Empty</Button>
            </div>

            <div className={styles.root}>
                <Button circle className={styles.reset} onClick={handleReset}>
                    <FontAwesomeIcon icon="history"/>
                </Button>
                {files.length > 0 && <FileCarousel name={props.name}/>}
                {(props.multiple || files.length === 0) && <FileDropbox multiple={props.multiple} name={props.name}/>}
            </div>
        </>
    );
};

export default File;