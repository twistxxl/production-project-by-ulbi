import { DetailedHTMLProps, HTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import stl from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: stl.justifyStart,
    center: stl.justifyCenter,
    end: stl.justifyEnd,
    between: stl.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: stl.alignStart,
    center: stl.alignCenter,
    end: stl.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: stl.directionRow,
    column: stl.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    8: stl.gap8,
    16: stl.gap16,
    24: stl.gap24,
    32: stl.gap32,
};
type DivProps = Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'ref'
>;

export interface FlexProps extends DivProps {
    className?: string;
    children?: React.ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [stl.max]: max,
    };
    return (
        <div className={classNames(stl.Flex, mods, classes)}>
            {children}
        </div>
    );
});
