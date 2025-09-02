import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from 'react';
import stl from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { TextTheme } from "shared/ui/Text/Text";
import { Text } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDisptach";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    login: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {

    const { t } = useTranslation()
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)





    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if(result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, onSuccess, password, username])



    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount={true}
        >
            <div className={classNames(stl.LoginForm, {}, [className])}>
                <Text text={t('Форма авторизации')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    placeholder="Введите логин"
                    type="text"
                    className={stl.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder="Введите пароль"
                    type="text"
                    className={stl.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={stl.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >{t('Войти')}</Button>
            </div>
        </DynamicModuleLoader>
    );
})

LoginForm.displayName = 'LoginForm'

export default LoginForm