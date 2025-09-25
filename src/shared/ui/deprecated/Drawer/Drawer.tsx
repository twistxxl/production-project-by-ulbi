import { memo, useCallback, useEffect } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../redisigned/Overlay/Overlay';
import {
    AnimationProvider,
    useAnimationLibs,
} from '../../../lib/components/AnimationProvider';
import stl from './Drawer.module.scss';
import { Portal } from '../../redisigned/Portal/Portal';

interface DrawerProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;


/**
 * @deprecated
 */

export const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({
        y: height,
    }));
    const { theme } = useTheme();
    const { className, children, isOpen, onClose, lazy } = props;

    const { isClosing, isMounted, closeHandler } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });
    const openDrawer = useCallback(() => {
        api.start({
            y: 0,
            immediate: false,
        });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) {
                cancel();
                return;
            }
            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({
                    y: my,
                    immediate: true,
                });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    const mods: Mods = {
        [stl.opened]: isOpen,
        [stl.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(stl.Drawer, mods, [
                    className,
                    theme,
                    'app_drawer',
                ])}
            >
                <Overlay onClick={closeHandler} />
                <Spring.a.div
                    className={stl.content}
                    style={{
                        display,
                        y,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                    }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }
    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
