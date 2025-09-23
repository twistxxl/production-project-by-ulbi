import { useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import stl from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;

    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={stl.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options],
    );

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const mods: Mods = {};
    return (
        <div className={classNames(stl.Wrapper, mods, [className])}>
            {label && <span className={stl.label}>{`${label}>`}</span>}
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
};
