import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import stl from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { theme } = useTheme();

    const {
        isClosing,
        isMounted,
        closeHandler,
    } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [stl.opened]: isOpen,
        [stl.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(stl.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={closeHandler} />
                <div className={stl.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
});
