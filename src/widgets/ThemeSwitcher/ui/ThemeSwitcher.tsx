import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIconDepricated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button as ButtonDeprecated, ButtonTheme as ThemeButton } from '@/shared/ui/deprecated/Button';
import stl from './ThemeSwitcher.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redisigned/Icon';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
               <Icon
                    Svg={ThemeIcon}
                    width={32}
                    height={32}
                    clickable
                    onClick={onToggleHandler}
                    className={classNames(stl.themeSwitcher, {}, [className])}
                />
            }
            off={
                <ButtonDeprecated
                    theme={ThemeButton.CLEAR}
                    className={classNames(stl.themeSwitcher, {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconDeprecated Svg={ThemeIconDepricated} width={40} height={40} inverted />
                </ButtonDeprecated>
            }
        />
    )
});

