import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import stl from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const { theme } = useTheme();

    const mods: Mods = {
        [stl.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(stl.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={stl.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
});
