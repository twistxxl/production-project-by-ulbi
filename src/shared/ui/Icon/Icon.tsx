import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import stl from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
        ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(inverted ? stl.inverted : stl.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
