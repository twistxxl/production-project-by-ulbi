import { FC, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import stl from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-32-32.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar: FC<AvatarProps> = ({
    className,
    src,
    size,
    alt,
    fallbackInverted,
}) => {
    const mods: Mods = {};

    const styles = useMemo<React.CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(stl.Avatar, mods, [className])}
        />
    );
};
