import { classNames } from '@/shared/lib/classNames/classNames';
import stl from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props;
    return (
        <div
            className={classNames(stl.Card, { [stl.max]: max }, [
                className,
                stl[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
