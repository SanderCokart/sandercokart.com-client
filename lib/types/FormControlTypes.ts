import type {InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes} from 'react';
import {FontAwesomeIcon} from './CustomTypes';

type Options = Array<{ label: string, value: string }>

export interface CheckBoxProps extends InputHTMLAttributes<any> {
    name: string;
    label: string;
}

export interface CheckBoxGroupProps extends InputHTMLAttributes<any> {
    name: string;
    label?: string;
    options: Options;
}

export interface DateProps extends InputHTMLAttributes<any> {
    name: string;
    label?: string;
    type?: 'date' | 'datetime-local' | 'week' | 'time';
    prependIcon?: FontAwesomeIcon;
    appendIcon?: FontAwesomeIcon;
}

export interface InputProps extends InputHTMLAttributes<any> {
    name: string;
    label?: string;
    placeholder?: string;
    prependIcon?: FontAwesomeIcon;
    appendIcon?: FontAwesomeIcon;
    type?: 'password' | 'email' | 'text' | 'number';
}

export interface FileProps extends InputHTMLAttributes<any> {
    name: string;
    multiple?: boolean;
}

export interface RadioProps extends InputHTMLAttributes<any> {
    name: string;
    label?: string;
    options: Options;
}

export interface SelectProps extends SelectHTMLAttributes<any> {
    name: string;
    label?: string;
    prependIcon?: FontAwesomeIcon;
    appendIcon?: FontAwesomeIcon;
}


export interface TextAreaProps extends TextareaHTMLAttributes<any> {
    name: string;
    label?: string;
    prependIcon?: FontAwesomeIcon;
    appendIcon?: FontAwesomeIcon;
}

export interface SwitchProps {
    name: string;
    label?: string;
    icon?: FontAwesomeIcon;
    onToggle: (state: boolean) => void;
}