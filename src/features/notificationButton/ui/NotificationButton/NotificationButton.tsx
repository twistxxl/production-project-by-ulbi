import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/bell-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import stl from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            className={classNames(stl.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={() => { }}
                >
                    <Icon inverted Svg={NotificationIcon} />
                </Button>
            )}
        >
            <NotificationList className={stl.notifications} />
        </Popover>
    );
});
