import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ProfileCard.module.scss'
import { useSelector } from "react-redux"
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData"
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading"
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError"
import { Text } from "shared/ui/Text/Text"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
interface ProfileCardProps {
    className?: string
}

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstName}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};

//не отрабатывает гет запрос почему то, хотя все как у тимура