import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from 'react';
import stl from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button } from "shared/lib/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { TextTheme } from "shared/ui/Text/Text";
import { Text } from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {

    const { t } = useTranslation()
    const dispatch = useDispatch();
    // const loginForm = useSelector(getLoginState)
    // const error = useSelector(getLoginState).error
    const { username, password, error, isLoading } = useSelector(getLoginState)
    const loginForm = { username, password }

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username: loginForm.username, password: loginForm.password }))
    }, [dispatch, loginForm.password, loginForm.username])



    return (
        <div className={classNames(stl.LoginForm, {}, [className])}>
            <Text text={t('Форма авторизации')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                placeholder="Введите логин"
                type="text"
                className={stl.input}
                onChange={onChangeUsername}
                value={loginForm.username}
            />
            <Input
                placeholder="Введите пароль"
                type="text"
                className={stl.input}
                onChange={onChangePassword}
                value={loginForm.password}
            />
            <Button
                className={stl.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >{t('Войти')}</Button>
        </div>
    );
})

LoginForm.displayName = 'LoginForm'