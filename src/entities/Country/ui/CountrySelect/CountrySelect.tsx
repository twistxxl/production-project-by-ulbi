import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;

    const options = [
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
    ];
    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            items={options}
            value={value}
            defaultValue="Укажите страну"
            label="Укажите страну"
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
});
