import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page className={classNames('', {}, [className])}>
            <Text title={t('Forbidden page')} />
        </Page>
    );
});
