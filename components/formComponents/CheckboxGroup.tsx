import styles from '@/styles/components/formComponents/CheckboxGroup.module.scss';
import type {CheckBoxGroupProps} from '@/types/FormControlTypes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {forwardRef, Fragment} from 'react';


const CheckboxGroup = forwardRef<HTMLInputElement, CheckBoxGroupProps>(function CheckboxGroup(props, ref) {
    const {
        name, label,
        id = name,
        options,
        error,
        ...rest
    } = props;

    return (
        <div className={styles.formControl}>
            {label && <label className={styles.labelStandalone} htmlFor={name}>{label}</label>}
            <div className={styles.formControlError}>
                {error && <span>{error.message}</span>}
            </div>
            <div className={styles.optionsContainer}>
                {
                    options.map((option) => {
                        return (
                            <Fragment key={option.label}>
                                <label className={styles.labelWrapper} htmlFor={`${name} ${option.value}`}>
                                    {option.label}
                                    <input {...rest}
                                           ref={ref}
                                           id={`${id} ${option.value}`}
                                           name={name}
                                           type="checkbox"
                                           value={option.value}/>
                                    <div className={styles.checkmark}>
                                        <FontAwesomeIcon icon={['fas', 'check']}/>
                                    </div>
                                </label>
                            </Fragment>
                        );
                    })
                }
            </div>
        </div>
    );
});

export default CheckboxGroup;