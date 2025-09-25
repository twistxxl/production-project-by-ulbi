import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme as ThemeButton } from '@/shared/ui/deprecated/Button';
import stl from './ThemeSwitcher.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
}

/**
 * @deprecated
 */

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
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
