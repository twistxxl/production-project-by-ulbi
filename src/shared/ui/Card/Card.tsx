import { classNames } from 'shared/lib/classNames/classNames';
import stl from './Card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export const Card = (props: CardProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={classNames(stl.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
