import { classNames, Mods } from "shared/lib/classNames/classNames";
import { FC, memo, useMemo } from 'react';
import stl from './Select.module.scss';

export interface SelectOption {
    value: string,
    content: string
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {

    const { className, label, options, value, onChange, readonly } = props

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={stl.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }

    const mods: Mods = {

    }
    return (
        <div className={classNames(stl.Wrapper, mods, [className])}>
            {label && (
                <span className={stl.label}>
                    {label + '>'}
                </span>
            )}
            <select 
            disabled={readonly}
            className={stl.select}
            value={value}
            onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});