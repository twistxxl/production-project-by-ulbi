import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { FC, useMemo } from 'react';
import stl from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string
    size?: number
    alt?: string
}

export const Avatar: FC<AvatarProps> = ({
    className, src, size, alt,
}) => {
    const mods: Mods = {

    };

    const styles = useMemo<React.CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(stl.Avatar, mods, [className])}
        >
            {/* код здесь */}
        </img>
    );
};
