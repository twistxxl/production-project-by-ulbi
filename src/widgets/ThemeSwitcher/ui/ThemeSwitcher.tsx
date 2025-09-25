import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme as ThemeButton } from '@/shared/ui/Button';
import stl from './ThemeSwitcher.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(stl.themeSwitcher, {}, [className])}
            onClick={onToggleHandler}  
        >
            {/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */}
            <Icon Svg={ThemeIcon} width={40} height={40} inverted />
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
