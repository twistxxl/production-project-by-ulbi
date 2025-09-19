import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import stl from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted } = props;

    return (
        <Svg className={classNames(inverted ? stl.inverted : stl.Icon, {}, [className])} />
    );
});
