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
}

export const Card = (props: CardProps) => {
    const {
        className, children, theme = CardTheme.NORMAL, ...otherProps
    } = props;
    return (
        <div
            className={classNames(stl.Card, {}, [className, stl[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
