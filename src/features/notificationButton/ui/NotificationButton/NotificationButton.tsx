import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/bell-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/bell.svg';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { NotificationList } from '@/entities/Notification';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import stl from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redisigned/Button';
import { Icon } from '@/shared/ui/redisigned/Icon';
import { Popover } from '@/shared/ui/redisigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);
    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon clickable onClick={toggleDrawer} Svg={NotificationIcon} />
            }
            off={
                <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={toggleDrawer}>
                    <IconDeprecated inverted Svg={NotificationIconDeprecated} />
                </ButtonDeprecated>
            }
        />
    );
    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(stl.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={stl.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(stl.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={stl.notifications} />
                        </PopoverDeprecated>
                    }
                />

            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={toggleDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});
