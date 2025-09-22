import { Listbox as HListBox } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from '../styles/popup.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';

export interface ListBoxItem {
    value: string;
    content: React.ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClassName = [mapDirectionClass[direction]];

    return (
        <HStack gap="8">
            {label && <span>{label}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, { [cls.readonly]: readonly }, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClassName)}>
                    {items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    },
                                )}
                                >
                                    {selected && '! '}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
