import { classNames } from "shared/lib/classNames/classNames";
import { FC, useCallback } from 'react';
import stl from './ProfilePageHeader.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation()

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch (profileActions.setReadonly(false))
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch (profileActions.cancelEdit())
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch (updateProfileData())
    }, [dispatch]);

    return (
        <div className={classNames(stl.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ?
                (
                    <Button
                        className={stl.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                :
                (
                    <>
                        <Button
                            className={stl.saveBtn}
                            theme={ButtonTheme.OUTLINE_INVERTED}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                        <Button
                            className={stl.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                    </>
                )
            }
        </div>
    );
};