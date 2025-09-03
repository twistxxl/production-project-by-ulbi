import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from 'react';
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void
    readonly?: boolean
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props

    const options = [
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
    ]
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange])

    return (
        <Select
            className={classNames('', {}, [className])}
            label={'Укажите страну'}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />

        
    );
});