import { classNames } from "shared/lib/classNames/classNames";
import { FC } from 'react';
import stl from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button } from "shared/lib/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {

    const { t } = useTranslation()

    return (
        <div className={classNames(stl.LoginForm, {}, [className])}>
            <Input
                placeholder="Введите логин"
                type="text"
                className={stl.input}
            />
            <Input 
                placeholder="Введите пароль"
                type="text"
                className={stl.input}
            />
            <Button className={stl.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};