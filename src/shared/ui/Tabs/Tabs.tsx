import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import stl from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    content: React.ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick } = props;
    // используем замыкание потому что обычный onClick на блоке принимается event: any
    const onClickHandle = useCallback(
        (tab: TabItem) => () => onTabClick(tab),
        [onTabClick],
    );

    return (
        <div className={classNames(stl.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    key={tab.value}
                    className={stl.tab}
                    onClick={onClickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
