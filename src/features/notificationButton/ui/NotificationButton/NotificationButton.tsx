import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/bell-20-20.svg';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer';
import { NotificationList } from '@/entities/Notification';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import stl from './NotificationButton.module.scss';

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
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleDrawer}
        >
            <Icon inverted Svg={NotificationIcon} />
        </Button>
    );
    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(stl.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={stl.notifications} />
                </Popover>
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
